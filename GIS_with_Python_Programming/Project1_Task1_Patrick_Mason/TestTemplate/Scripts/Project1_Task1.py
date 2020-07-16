#=============================================================================#
#   File Name: Project1_Task1.py
#   Date Created: 20160204
#   Author: Patrick Mason, contact
#   Updates: YYYYMMDD
#   Description: Calculating my current grade in the class and provide
#   an estimate of how many points or what assignments need to be completed
#   to achieve a desired grade.
#============================================================================#

#import modules
import arcpy
import sys
import string
import os

#global variables

#create TestTemplate folder
Test_Template = r"..\TestTemplate"

#create Docs and Scripts folder inside TestTemplate
Docs = r"..\Docs"
Scripts = r"..\Scripts"

#define home directory as going up one directory, down one folder to
#information about tools
home_directory = r"..\ToolData"
original_data = "SourceData.gdb"
scratch_data = "Scratch.gdb"
final_data = "Results.gdb"


def log_it(message):
    time = datetime.datetime.now()strtime("%H:%M:%S.%f")
    log_file = open(r"D:\GISC_2435\Project1\TestTemplate\Docs\.txt".format(datetime.datetime.now()strtime("%Y%m%d")),'a')
    log_file.write("{0}\t{1}".format(time,message))
    log_file.close()

#main program
try:
#create scratch database
if not os.path.exists(os.path.join(home_directory, scratch_gdb)):
    arcpy.CreateFileGDB_management (home_directory, scratch_gdb)
 
#create source database
if not os.path.exists(os.path.join(home_directory, sourcedata_gdb)):
    arcpy.CreateFileGDB_management (home_directory, sourcedata_gdb)

#create results database
if not os.path.exists(os.path.join(home_directory, results_gdb)):
    arcpy.CreateFileGDB_management (home_directory, results_gdb)

except Exception is e:
    log_it(e)
    


