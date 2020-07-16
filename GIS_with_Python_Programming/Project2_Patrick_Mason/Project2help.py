Python 2.7.8 (default, Jun 30 2014, 16:03:49) [MSC v.1500 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> import arcpy
from
>>> arpy import env
SyntaxError: invalid syntax
>>> import arcpy
>>> from arcpy import env
>>> env.workspace = r"U:\Programming_for_GIS\Data\Project2\Data"
>>> arcpy.ListFiles()
>>> 
>>> 
>>> 
>>> for shp_file in arcpy.ListFiles():
	if shp_file.endswith(".shp"):
		print shp_file

		

Traceback (most recent call last):
  File "<pyshell#12>", line 1, in <module>
    for shp_file in arcpy.ListFiles():
TypeError: 'NoneType' object is not iterable
>>> fn = "County_Boundaries.shp"
>>> fn[:-4]
'County_Boundaries'
>>> newfc = fn[:-4] + "_project"
>>> print newfc
County_Boundaries_project
>>> for shp_file in arcpy.ListFiles():
	if shp_file.endswith(".shp"):
		new_fc = shp_file [:-4] + "-project"
		print new_fc

		

Traceback (most recent call last):
  File "<pyshell#19>", line 1, in <module>
    for shp_file in arcpy.ListFiles():
TypeError: 'NoneType' object is not iterable
>>> "Austin, San Antonio, Houston".split(",")
['Austin', ' San Antonio', ' Houston']
>>> cities = "Austin, San Antonio, Houston".split(",")
>>> cities
['Austin', ' San Antonio', ' Houston']
>>> for city in cities:
	print "I live in:" + city

	
I live in:Austin
I live in: San Antonio
I live in: Houston
>>> 
