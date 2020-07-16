#======================================================================#
#   Name: csv_practice.py
#   Author: Patrick Mason
#   Date: 20160418
#   Description: Takes a CSV file and imports it to ArcMap
#======================================================================#

#Using dictionaries practice
#import modules
##import datetime
##import random
##
##
###create functions
##def datestamp():
##    return 0datetime.datetime.now().strftime("The time is %H:%M:%S.")
##
###create
##def hello(name):
##    print "Hello, {0}! {1}".format (name, datestamp())
##
##def random_number():
##    return random.randrange(1,10)
##
###execute main program
##if__name__=="__main__":
##    helo("Class")
##    d1 = {"even":[], "odd":[]}
##    
##    count = 0
##    while count < 50:
##        rn = random_number()
##        if rn % 2 == 0:
##            d1['even'].append(rn)
##        else:
##            d1['odd'].append(rn)
##        count+= 1
##    print "even:",str(d1['even'])
##    print "odd:",str(d1['odd'])
##    message = "There are {0} even numbers".format(len(d1['even']))
##    message + = "and {0} odd numbers."format(len(d1['even']))
##
##    print message
#######################################################################################
#
#
#Use this for project 4



#import modules
import arcpy
import csv

read_csv = open(r"E:\GISC_2435\20160420\20160420\rand_pt.header.csv",'r')

reader = csv.reader(read_csv, delmiter = ',')
#Categorizes first
#csv_dict = {'category':[[x,y], [x,y]], [x,y]], 'category2':[[x,y], [x,y]]}
csv_dict = {}

for row in reader:
    #print row
    try:
        if row[2] not in csv_dict.keys():
            csv_dict[row[2]] = [[row[0], row[1]]]
        else:
            csv_dict[row[2]].append([row[0], row[1]])
    except:
        pass
cursor = arcpy.da.InsertCursor(r"..\Lab20160418.gdb\point_template",["SHAPE@", "X", "Y"])
for key in csv_dict.keys():
    point_list = []

    for pointpair in csv_dict [key]:
        if key == "category":
            pass
        else:
            point = arcpy.Point([0], pointpair[1])
            point_geom = arcpy.PointGeometry(point)
            point_list.append([point_geom, <x>, <y>])
                                        pointpair[0], pointpair[1]
            #1 way or jump to #2 way
            cursor.insertRow([<point_geom>, <xvalue>, <yvalue>])
#Auto populate depending on the SHAPE attribute we want to have filled in.
#2 way
cursor = arcpy.da.InsertCursor(r"E:\GISC_2435\20160420\20160420\Lab20160418.gdb\point_template",["SHAPE@", "X", "Y"])

for pt in point_list:
    cursor.insertRow([<point_geom>,<xvalue>,<yvalue>])
    
#Both finish this way
del cursor

                                #question in class
                                cursor.insertRow([pointpair, pointpair[0], pointpair[1]])


