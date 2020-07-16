#==========================================================================================#
#   File Name: rhino_script.py
#   Date Created: 20160425
#   Author: Patrick Mason contact
#   Updates: YYYYMMDD
#   Description: Each record in the spreadsheet shows the latitude/longitude
#   coordinate of a rhino along with the rhino's name (these rhinos are well known to
#   your field workers). You want to write a script that will turn the readings in the
#   spreadsheet into a vector dataset that you can place on a map. This will be a polyline
#   dataset showing the tracks the rhinos followed over the time the data was collected. We
#   are using a xlrd method to read the excel document and generate a shapefile with
#   polylines to track the paths of each rhino and any other Rhino added to the list.
#==========================================================================================#

#import modules
import xlrd
import arcpy

#Set variables 
rhinos = "Rhinos"
x_coord = "X"
y_coord = "Y"

#Read the csv for Rhino Observations
read_csv = xlrd.open_workbook(r"\GISC_2435\Project4\Data\RhinoObservations.xlsx")
sheet = read_csv.sheet_by_index(0)

#Make a dictionary for csv
csv_dict = {}
print"reading through csv file"

#Make a for loop for dictionary
for row in range(sheet.nrows):
    col = sheet.row_values(row)
    if col[3] not in csv_dict.keys():
        csv_dict[col[3]] = [[col[1], col[2]]]
    else:
        csv_dict[col[3]].append([col[1], col[2]])
print csv_dict

#Create a Spatial reference
#CreateSpatialReference_management ({spatial_reference}, {spatial_reference_template}, {xy_domain},
#{z_domain}, {m_domain},{template}, {expand_ratio})
SR = arcpy.CreateSpatialReference_management(r"D:\GISC_2435\Project4\Data\Rhinos.prj")

#create shapefile
#CreateFeatureclass_management (out_path, out_name, {geometry_type},
#                               {template}, {has_m}, {has_z},
#                               {spatial_reference},{config_keyword},
#                               {spatial_grid_1}, {spatial_grid_2},
#                               {spatial_grid_3})
arcpy.CreateFeatureclass_management(r"D:\GISC_2435\Project4", rhinos, "POLYLINE","", "DISABLED", "DISABLED", SR) 

#insert fields for x, y, and rhinos
#AddField_management (in_table, field_name, field_type)
arcpy.AddField_management(r"D:\GISC_2435\Project4\Rhinos.dbf", x_coord,"FLOAT")
print "Added new field called X"

#AddField_management (in_table, field_name, field_type)
arcpy.AddField_management(r"D:\GISC_2435\Project4\Rhinos.dbf", y_coord,"FLOAT")
print "Added new field called Y"

#AddField_management (in_table, field_name, field_type)
arcpy.AddField_management(r"D:\GISC_2435\Project4\Rhinos.dbf", rhinos,"TEXT")
print "Added new field called rhino"

#create insert cursor to insert into the shapefile
with arcpy.da.InsertCursor(r"D:\GISC_2435\Project4\Rhinos.dbf",["Shape@", "rhinos"])as cursor:
    #for each rhino in the dictionary
    for rhinos in csv_dict.keys():
        print "csv dictionary keys"
        
        #create a polyine of the coordinate pairs for the rhino
        if rhinos != "Rhino":            
            #polyline = arcpy.Polyline(arcpy.Array([arcpy.Point(*coords) for coords in csv_dict[rhinos]]))
            polyline = arcpy.Polyline(arcpy.Array([arcpy.Point(*coords) for coords in csv_dict[rhinos]]))
            print "Polyline is drawn"
            
            #insert polyline and rhino name into shapefile
            cursor.insertRow(([polyline, rhinos]))    

#del the row (rhino) and cursor
del rhinos
del cursor
print "delete cursor"
