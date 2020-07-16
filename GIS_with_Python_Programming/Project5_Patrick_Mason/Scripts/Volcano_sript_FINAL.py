#---------------------------------------------------------------------------------------------#
#       File_name: Volcano_Script
#       Author:  Patrick Mason
#       Created: 20160411
#       Updated: 20160507
#       Description: Model that ascertains multiple buffer zones for active
#       volcanos in the United States that are most likely to erupt near
#       cities with large populations (we are using 300,000 or over but the
#       user may specify a different population amount). The intensity of an
#       eruption could affect the distance of the buffer zones around a volcano.
#       We will be utilizing different distances for the buffer zones, and that
#       parameter may be set by the user as well. The volcanos used in the
#       results of this Model are documented to have erupted at least ten times
#       in recent human history but the user may specify different known eruption
#       amounts.
#--------------------------------------------------------------------------------------------#

#Import modules
import arcpy
from arcpy import env

#Overwrite output for the environment
env.overwriteOutput = True

#Set up the work environment for the Volcanoes file geodatabase
#arcpy.env.workspace = r"E:\GISC_2435\Project5_Patrick_Mason\Data\Volcanoes.gdb"
arcpy.env.workspace = arcpy.GetParameterAsText(0)

#Define the file outputs for the file geodatabase
Volcanoes_gdb = "Volcanoes.gdb"

#main program
#Set variable for the feature layers and field_names
#This is already listed for the feature classes
cities = "USA_cities"
cities_sel = "USA_SelectCities"
cities_pop = arcpy.GetParameterAsText(1)#set parameter as text
population_expression = arcpy.GetParameterAsText(2)#set parameter as text


    
volcanoes = "Volcanoes"
volcanoes_sel = "Volcanoes_Select"
volcano_danger = arcpy.GetParameterAsText(3)#set parameter as text
volcano_expression = arcpy.GetParameterAsText(4)#set parameter as text


volcano_knoerupt = "Volcano_knownerupt"
volcano_buffer = "Volcanoes_buffer"
volcano_buff_n_ = "Volcano_Buffer_n_"
get_buffer = arcpy.GetParameterAsText(5) #set parameter as text

#user input: 10,20,30,40 for distances of the Volcano buffers set as Default
#If the user inputs other distances values it will use the if-else statement.
#The buffers can be put out of order if the user makes a mistake in ordering
#them
if get_buffer is None:
    distances = [10,20,30,40]
    arcpy.AddMessage("Volcano Buffer Distances 10 Mile: {0}".format(distances))
else:
    arcpy.AddMessage("{0}".format(repr(get_buffer)))
    distances = sorted([int(x.strip()) for x in get_buffer.split(',')])
    arcpy.AddMessage("Volcano Buffer Distances: {0}".format(distances))
arcpy.RefreshTOC()

    
#Set the Field Names of the USA Cities and Volcanoes
city_field_names = ["POP2000"]
volcano_field_names = ["KNOWN_ERUP","BUFF_DIST"]


#Make Feature Layer to use by attributes for the selected cities
#MakeFeatureLayer_management(in_features, out_layer, {where_clause},{workspace}, {field_info})
arcpy.MakeFeatureLayer_management(cities, cities_sel)

#Select Feature Layer to make a selected feature layer for USA_SelectCities
#Select_analysis (in_features, out_feature_class, {where_clause})
#Set the 300000 as parameterastext turn into a variable#
arcpy.Select_analysis(cities_sel, cities_pop, population_expression)
arcpy.AddMessage("Population: {0}".format(cities_pop))

#Make Feature Layer to use by attributes for the selected volcanoes
#MakeFeatureLayer_management (in_features, out_layer, {where_clause},{workspace}, {field_info})
arcpy.MakeFeatureLayer_management(volcanoes, volcanoes_sel)
arcpy.AddMessage("Volcanoes: {0}".format(volcanoes_sel))

#Select Feature Layer to make a selected feature layer for Volcanoes_Sel.shp
#Select_analysis (in_features, out_feature_class, {where_clause})
#Set the 10 as parameter as text turn into a variable#
arcpy.Select_analysis(volcanoes_sel, volcano_danger, volcano_expression)
arcpy.AddMessage("Known Eruption: {0}".format(volcano_danger))

#Make Feature Layer to use by attributes for the selected volcanoes
#more than a number of eruptions specified by the user
arcpy.MakeFeatureLayer_management(volcanoes_sel, volcano_knoerupt)
arcpy.AddMessage("Volcano Known Erupt: {0}".format(volcano_knoerupt))

#Make Feature Layer to use by attributes for the selected volcanoes
#more than a number of eruptions specified by the user with a buffer
#distance that is not yet user friendly
arcpy.MakeFeatureLayer_management(volcano_knoerupt, volcano_buffer)

#Make Feature Layer to use by attributes for the selected volcanoes
#more than a number of eruptions specified by the user with a set
#buffer distance that can be used later for the multiple buffer ring
#that is user friendly
arcpy.MakeFeatureLayer_management(volcano_buffer, volcano_buff_n_)

#Make a Multiple Buffer Ring for volcano_danger feature layer for four buffers
#that can be specified by the user or go with the default of four 10 mile buffers
#MultipleRingBuffer_analysis (Input_Features, Output_Feature_class, Distances,
#{Buffer_Unit}, {Field_Name}, {Dissolve_Option}, {Outside_Polygons_Only})
arcpy.MultipleRingBuffer_analysis(volcano_danger, volcano_buff_n_, distances, "MILES")
arcpy.AddMessage("Volcano Multiple Ring Buffer: {0}".format(volcano_buff_n_))
arcpy.RefreshTOC()
