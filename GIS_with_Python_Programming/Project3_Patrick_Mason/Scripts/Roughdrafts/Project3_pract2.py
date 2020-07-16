#======================================================================#
#   File Name: Filename.py
#   Date Created: YYYYMMDD
#   Author: First Last, contact
#   Updates: YYYYMMDD
#   Description: A brief description about what you are about to do
#======================================================================#

#import modules

#global variables

#main program

import arcpy
>>> gdb = r"E:\GISC_2435\Project3_Patrick_Mason\Data\PoliceData.gdb"
>>> from arcpy import env
>>> env.workspace = gdb
>>> arcpy.ListFeatureClasses

>>> fc_list = arcpy.ListFeatureClasses()
>>> for fc in fc_list:
	print fc
	

>>> fc_list[0]


>>> fc_list[1]


>>> districts = fc_lists[0]

>>> print districts


>>> field = arcpy.ListFields(districts)


    
>>> print fields


>>> for field in fields:
	print field.name

    
>>> field[2].name


>>> incl_fields = fields[2].name


>>> incl_fields


>>> cursor = arcpy.SearchCursor(fc_list[0], "", "", incl_fields)


>>> for row in cursor:
	print(row.getValue(incl_fields))


>>> del cursor
>>> for field in fields:
        print field.name


>>> incl_fields = "{0};{1};{2}".format(fields[2], fields[5], fields[9])
>>> incl_fields = "{0};{1};{2}".format(fields[2].name, fields[5].name, fields[9].name)

>>>incl_fields

>>>cursor = arcpy.SearchCursor(districts,"","",incl_fields)#try hastags inside the quotation marks and if it does not work then don't use it

>>> row = cursor.next()
>>> while row:
        print (row.getValue(fields[2].name))
        print (row.getValue(row[0]))
        print (row.getValue(fields[5].name))
        print (row.getValue(row[1]))
        #function may not work here skip to next line


>>> while row:
        print (row.getValue(fields[2].name))
        print (row.getValue(fields[5].name))
        row = cursor.next()
        del cursor
    
