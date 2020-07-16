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
import sys
import arcpy
#import arcgisscripting

print("hello world")

Rslt = arcpy.ImportToolbox("E:\\GISC_2435\\Project2\\Project2_Mason\\Project2.tbx")


Working_Directory = str(input("GivemetheTargetFolder"))
Target_File = str(input("Give me the Target shapefile"))
Output_Folder = str(input("GivemetheoutputFilder"))

Rslt.BatchScript(Working_Directory, Target_File,Output_Folder)





