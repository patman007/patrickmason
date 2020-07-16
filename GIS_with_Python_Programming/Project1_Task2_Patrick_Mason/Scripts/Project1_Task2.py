#======================================================================#
#   File Name: Project1_Task2.py
#   Date Created: 20160208
#   Author: Patrick Mason, contact
#   Updates: YYYYMMDD
#   Description: Calculating out grades for GISC 2435 up to this point/
#   in the semester.
#======================================================================#

#import modules
import arcpy
import sys
import string
import os
import math

#global variables

#create Grades folder
Grades = r"..\20160214_Project1_Task2_Patrick_Mason_GISC2435

#create Docs and Scripts folder inside Grades
Docs = r"..\Docs"
Scripts = r"..\Scripts"

#define home directory as going up one directory, down one folder to
#information about tools
home_directory = r"..\Tooldata"
original_data = "SourceData.gdb"
scratch_data = "Scratch.gdb"
final_data = "Results.gdb"

def log_it(message):
    time = datetime.datetime.now()strtime("%H:%M:%S:%f")
    log_file = open(r"E:\GISC_2435\20160214_Project1_Task2_Patrick_Mason_GISC2435\Docs\.txt".format(datetime.datetime.now()strtime("%Y%m%d")),'a')
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


#Bring in math module
print math
<modeule 'math' (built-in)>

#Bring in each column and add as well as take sum
Projects = ['10.00', '10.00', '10.00', '10.00', '10.00']
Attendance = ['2.00','2.00','2.00','2.00','2.00', '2.00', '2.00', '2.00','2.00','2.00']
Lab = ['100.00', '100.00', '95.00', '90.00', '100.00', '100.00','100.00', '90.00', '90.00', '100.00']
Reading_Assignment = ['5.00', '5.00', '5.00', '5.00', '5.00', '5.00', '5.00', '5.00']
Code_Review = ['100.00', '95.00', '90.00', '94.00', '90.00', '100.00']


#Add all columns and take average and weighted average
print Projects
<module 'math' (built-in)>sum(Projects)
print sum
<module 'math' (built-in)>mean(Projects)
print mean
print * 0.50
print Attendance
<module 'math' (built-in)>sum(Attendance)
print sum
<module 'math' (built-in)>mean(Attendance)
print mean
print * 0.05
print Lab
<module 'math' (built-in)>sum(Lab)
print sum
<module 'math' (built-in)>mean(Lab)
print mean
print * 0.20
print Reading_Assignment
<module 'math' (built-in)>sum(Reading_Assignment)
print sum
<module 'math' (built-in)>mean(Reading_Assignment)
print mean
print *0.05
print Code_Review
<module 'math' (built-in)>sum(Code_Review)
print sum
<module 'math' (built-in)>mean(Code_Review)
print mean
print * 0.10

#End process




    


