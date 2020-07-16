#================================================================================#
#   File Name: Project2.py
#   Date Created: 20160222
#   Author: Patrick Mason, contact
#   Updates: YYYYMMDD
#   Description: Make a script that lists each shapefile and then rename
#   shapefile with _Project.shp and then reprojects coordinate system of 
#   several shapefiles based on the input of one shapefile used as the
#   targetFC in my targetFolder. Both inputs and outputs will be located
#   in the same folder called Shapefiles. Lastly, we want a message to be
#   made that says the reprojection of the new spatial references for the
#   shapefiles that match with our TargetFC.
#================================================================================#

#The neccessary modules
import os
import arcpy

#global variables
#-----------------#

#Set directories for targeFolder and targetFeatureclass
targetFolder = str(raw_input("where the target folder is located")) #arcpy.[Toolbox_name].parameter[0] 
targetFC = str(raw_input("where the feaure classes are located")) #arcpy.[Toolbox_name].parameter[1]

#Set workspace environment and list feature classes
arcpy.env.workspace = targetFolder
featureClass = arcpy.ListFeatureClasses()

#main program

#Loop start here
#Remove .shp from feature class
for shp_file in arcpy.ListFiles():
    if shp_file.endswith(".shp"):

        #get spatial reference for target feature class
        targetDescribe = arcpy.Describe(targetFC)
        targetSR = targetDescribe.SpatialReference()
        targetSRName = targetSR.Name
        
        #get spatial reference for current feature class
        currentFCDescribe = arcpy.Describe(currentFC)
        currentFCSR = currentFCDescribe.SpatialReference()
        currentFCSRName = currentFCSR.Name

        #Check dataset is already in target projection/
        #by comparing Name property of spatial references
        if currentFCSRName != targetSRName:
            print ("Spatial references do not match")
        else:
            print ("Spatial references do match")
        if currentFCSR.Name == targetSR.Name:
            shp_file = shp_file[:-4] + "_Project" + ".shp"
        else:
            
            #Determine output feature class names and path
            outCS = arcpy.outCoordinateSystem()
            arcpy.Project_management(currentFC, outCS)
            rootname = currentFC[:-4]
            print (rootname)
            print (rootname + "_Project.shp")
            #Add Get Message command after Project tool
            arcpy.AddMessage(arcpy.GetMessages())
