#========================================================================================#
#   File Name: Project3_FINAL.py
#   Date Created: 20160325
#   Author: First Last, contact
#   Updates: 20160329
#   Description: This script updates attributes with patrol zones based on
#   the number of graffiti incidents within each the patrol zone based
#   on an integer that goes inside the Priority field. Patrol zones are
#   based on priority rankings.
#           TOP CONCERN         >=15 incidents per square mile
#           HIGH CONCERN        Between >=12 incidents and <15 incidents per square mile
#           SOME CONCERN        Between >=6  incidents and <12 incidents per square mile 
#           LOW CONCERN         <6   incidents per square mile               
#========================================================================================#

#import modules
import arcpy
from arcpy import env


#Set up the work environment for the Police Data geodatabase
arcpy.env.workspace = r"E:\GISC_2435\Project3_Patrick_Mason\Data\PoliceData.gdb"

#Set variables for feature layers and field_names
Districts = "policeSectorDistricts"
Districts_Layer = "DistrictsLayer"
incidents = "Incidents"
incidents_Layer = "IncidentsLayer"

field_names = ["Incidents","Priority","geodb_oid","Shape@AREA"]  #Look at the arcpy.da cursor


#Make a feature layer to use by attribute
arcpy.MakeFeatureLayer_management(Districts, Districts_Layer)

#Make a feature layer to use by location
arcpy.MakeFeatureLayer_management(incidents, incidents_Layer)


#main program
#Make an Update cursor and while loop for Districts feature layer
with arcpy.da.UpdateCursor(Districts, field_names) as cursor:
   for row in cursor:
      code = row[2]
      #Select Layer by Attributes for the Districts_Layer feature layer
      arcpy.SelectLayerByAttribute_management(Districts_Layer,"NEW_SELECTION","geodb_oid = {0}".format(code))

      #Select Layer by Location on the Incidents feature layer
      arcpy.SelectLayerByLocation_management(incidents_Layer, "WITHIN", Districts_Layer,"", "NEW_SELECTION")

      #Get a count of the incidents_Layer
      result = int(arcpy.GetCount_management(incidents_Layer).getOutput(0))
    

      #Calculate an Area in square miles
      sq_miles = row[3]/ float(27878400)
      print sq_miles
      
      #Update the Incidents field 
      row[0] = result
      
      #Calculate incidents per square mile
      incidents_per_mile = float(result)/sq_miles
      print incidents_per_mile
      
      #Figure out what the prority is based off of incidents per square mile   
      #Priority Rankings
      #Label as TOP CONCERN, HIGH CONCERN, SOME CONCERN, or LOW CONCERN
      if incidents_per_mile >= 15:                    
         priority = "TOP CONCERN"
      elif 12 <= incidents_per_mile and incidents_per_mile < 15:
         priority = "HIGH CONCERN"
      elif 6 <= incidents_per_mile and incidents_per_mile < 12:
         priority = "SOME CONCERN"
      else:
         priority = "LOW CONCERN"
            
      #Update the Priority field
      row[1] = priority

      cursor.updateRow(row)
                            
   #Delete the row
   del row
   
   #Delete the cursor
   del cursor

   print"complete cursor"
   print"complete rows"
   






