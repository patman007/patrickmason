Python 2.7.8 (default, Jun 30 2014, 16:03:49) [MSC v.1500 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> import arcpy
d
>>> import arcpy
>>> gdb = r"E:\GISC_2435\Project3_Patrick_Mason\Data\PoliceData.gdb"
>>> from arcpy import env
>>> env.workspace = gdb
>>> arcpy.ListFeatureClasses
<function ListFeatureClasses at 0x0EDEE8F0>
>>> fc_list = arcpy.ListFeatureClasses()
>>> for fc in fc_list:
	print fc in fc_list:
		
SyntaxError: invalid syntax
>>> for fc in fc_list:
	print fc

	
>>> 
>>> fc_list = arcpy.ListFeatureClasses()
>>> for fc in fc_list:
	print fc
	
>>> 
>>> fc_list[0]

Traceback (most recent call last):
  File "<pyshell#14>", line 1, in <module>
    fc_list[0]
IndexError: list index out of range
>>> import arcpy
>>> gdb = r"E:\GISC_2435\Project3_Patrick_Mason\Data\PoliceData.gdb"
>>> from arcpy import env
>>> env.workspace = gdb
>>> arcpy.ListFeatureClasses
<function ListFeatureClasses at 0x0EDEE8F0>
>>> fc_list = arcpy.ListFeatureClasses()
>>> for fc in fc_list:
	print fc
	
>>> 
>>> fc_list[0]

Traceback (most recent call last):
  File "<pyshell#17>", line 1, in <module>
    fc_list[0]
IndexError: list index out of range
>>> fc_list[1]

Traceback (most recent call last):
  File "<pyshell#18>", line 1, in <module>
    fc_list[1]
IndexError: list index out of range
>>> districts = fc_lists[0]

Traceback (most recent call last):
  File "<pyshell#19>", line 1, in <module>
    districts = fc_lists[0]
NameError: name 'fc_lists' is not defined
>>> print districts

Traceback (most recent call last):
  File "<pyshell#20>", line 1, in <module>
    print districts
NameError: name 'districts' is not defined
>>> field = arcpy.ListFields(districts)

Traceback (most recent call last):
  File "<pyshell#21>", line 1, in <module>
    field = arcpy.ListFields(districts)
NameError: name 'districts' is not defined
>>> print fields

Traceback (most recent call last):
  File "<pyshell#22>", line 1, in <module>
    print fields
NameError: name 'fields' is not defined
>>> for field in fields:
	print field.name

	

Traceback (most recent call last):
  File "<pyshell#25>", line 1, in <module>
    for field in fields:
NameError: name 'fields' is not defined
>>> field[2].name

Traceback (most recent call last):
  File "<pyshell#26>", line 1, in <module>
    field[2].name
NameError: name 'field' is not defined
>>> incl_fields = fields[2].name

Traceback (most recent call last):
  File "<pyshell#27>", line 1, in <module>
    incl_fields = fields[2].name
NameError: name 'fields' is not defined
>>> incl_fields

Traceback (most recent call last):
  File "<pyshell#28>", line 1, in <module>
    incl_fields
NameError: name 'incl_fields' is not defined
>>> cursor = arcpy.SearchCursor(fc_list[0], "", "", incl_fields)

Traceback (most recent call last):
  File "<pyshell#29>", line 1, in <module>
    cursor = arcpy.SearchCursor(fc_list[0], "", "", incl_fields)
IndexError: list index out of range
>>> for row in cursor:
	print(row.getValue(incl_fields))

	

Traceback (most recent call last):
  File "<pyshell#32>", line 1, in <module>
    for row in cursor:
NameError: name 'cursor' is not defined
>>> del cursor

Traceback (most recent call last):
  File "<pyshell#33>", line 1, in <module>
    del cursor
NameError: name 'cursor' is not defined
>>> fo
