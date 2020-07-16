#=================================================================================================#
#   File Name: Project3_Incidents.py
#   Date Created: 20160327
#   Author: Patrick Mason, contact
#   Updates: YYYYMMDD
#   Description: This script updates attributes with patrol zones based on the number of graffiti
#   incidents falling within the patrol zone based on an integer that goes inside the Incidents
#   field. Patrol zones are based on priority rankings based on TOP CONCERN (equal to or greater
#   than 15 incidents per square mile), HIGH CONCERN (equal to or greater than 12 but less than
#   15 incidents per su), SOME CONCERN (equal to or greater than 6 but less 12 incidents per square
#   mile), and LOW CONCERN (less than 6 incidents per square mile).
#=================================================================================================#

#import modules
import math
import arcpy


#Set up the work environment for the Police Data geodatabase
gdb = r"E:\GISC_2435\Project3_Patrick_Mason\Data\PoliceData.gdb"
from arcpy import env
env.workspace = gdb
arcpy.env.overwriteOuput = True


#List the feature classes and fields
arcpy.ListFields
fields_list = arcpy.ListFields()
for fields in fields_list:
    print fields

arcpy.ListFeatureClasses
fc_list = arcpy.ListFeatureClasses()
for fc in fc_list:
    print fc


#Global Variable set for folder paths Incident and policeSectorDistricts shapefiles and columns
#(fields)for Incidents shapefile attribute table
police_sectors = r"E:\GISC_2435\Project3_Patrick_Mason\Data\PoliceData.gdb\policeSectorDistricts"
incidents = r"E:\GISC_2435\Project3_Patrick_Mason\Data\PoliceData.gdb\Incidents"


district_name = "district_n"            #Name of Column for number (integer) of incidents
#priorityField = "Priority2"            #Name of Column for Patrol zone for Priority Rankings
incidentsWithdistrict_Name = 0          #Used for counting incidents happening in each police district
numincidents = 0                        #Used for counting the total number of incidents in the area

#main program

#Make a Feature layer of all the incidents
arcpy.MakeFeatureLayer_management('policeSectorDistricts', 'Inciden_within_' + district_n)
arcpy.SelectLayerByLocation_management('Incidents', 'WITHIN', district_n)
print "No errors here"

#Make an Update cursor and loop through each Incident
cursor = arcpy.da.UpdateCursor(policeSectorDistricts,(districts_n,'Shape_Area'))
for row in cursor:
        print(row)
        
        
#Count the number of incidents in the districts
arcpy.GetCount_management(row)            

                     

            #If greater than or equal to 15 incidents found per square mile then label as TOP CONCERN
            #if x >= 15:
                #print "TOP CONCERN"
                #If greater than or equal to 12 but less than 15 incidents per square mile then label as
                #HIGH CONCERN
            #elif 12 <=x< 15:
                #print "HIGH CONCERN"
                #If greater than or equal to 6 but less than 12 incidents per square mile then label as
                #SOME CONCERN
            #elif 6 <=x< 12:
                #print "SOME CONCERN"
                #If fewer than 6 incidents per square mile label as LOW CONCERN
            #else:
                #print "LOW CONCERN"
