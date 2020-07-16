Python 2.7.8 (default, Jun 30 2014, 16:03:49) [MSC v.1500 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> import arcpy
>>> temp = E:\GISC_2435\Project2\Project2_Mason\ToolData\FinalOutput_Folder\Shapefiles
SyntaxError: invalid syntax
>>> temp = "E:\GISC_2435\Project2\Project2_Mason\ToolData\FinalOutput_Folder\Shapefiles"
>>> arcpy.SpatialReference('North America Equidistant Conic')
<SpatialReference object at 0x262b8b0[0x26dfef0]>
>>> ================================ RESTART ================================
>>> 
where the target folder is located
>>> ================================ RESTART ================================
>>> 
where the target folder is located "E:\GISC_2435\Project2\Project2_Mason\ToolData\FinalOutput_Folder\Shapefiles"
where the feaure classes are located "E:\GISC_2435\Project2\Project2_Mason\ToolData\FinalOutput_Folder\Shapefiles\Zoning.shp"

Traceback (most recent call last):
  File "E:\GISC_2435\Project2\Project2_Mason\Scripts\Project2.py", line 33, in <module>
    for shp_file in arcpy.ListFiles():
TypeError: 'NoneType' object is not iterable
>>> 
