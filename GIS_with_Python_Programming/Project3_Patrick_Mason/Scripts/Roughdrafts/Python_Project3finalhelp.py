import arcpy
from arcpy import env

arcpy.env.workspace = r"E:\GISC_2435\Project3_Patrick_Mason\Data\PoliceData.gdb"


Districts = "policeSectorsDistrict"
Disricts_Layer = "DistrictsLayer"
incidents = "Incidents"

field_names = ["Incidents","Priority2","geodb_oid","Shape@Area"]#Look at the arcpy.da cursor


#Create feature layer to use by attribute
arcpy.MakeFeatureLayer_management(Districts, Districts_Layer)


with arcpy.da.UpdateCursor(Districts, field_names) as cursor:
     for row in cursor:
        code = row[2]
        arcpy.SelectLayerByAttribute_management(Districts_Layer,"NEW_SELECTION","geodb_oid = {0}".format(code))

        #Select by Location on te Incidents

        #Get a count of the incidents

        #Update the Incidents field

        #Update the Priority field
        Pririoty rankings part
        #Update the row


#Delete the cursor

#Delete the row





