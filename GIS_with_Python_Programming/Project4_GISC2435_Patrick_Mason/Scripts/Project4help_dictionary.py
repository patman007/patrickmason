#======================================================================#
#   File Name: Filename.py
#   Date Created: YYYYMMDD
#   Author: First Last, contact
#   Updates: YYYYMMDD
#   Description: A brief description about what you are about to do
#======================================================================#

#import modules
import csv
import xldr


#Set variables
xl = r"E:\GISC_2435\Project4\Data\RhinoObservations.xlsx"

xl_p = slrd.open_workbook(x1)
xl_s = xl_p.sheet_by_index(0)

#lists title rows
row = xl_s.row(0)

#lists the first row of data
row1 = xl_s.row(1)


#list all rows for the sheet
#using two for loops with rows first and then columns second

#Seeing individual values
cell_obj = x1_s.cell(0,0)

cell_obj = sl_s.cell(1,0)

cell_obj = xl_s.cell(1,3)


#Make for loop for to list view
for row_idx in range(0, xl_s.nrows):
    r_list = []
    for col_idx in range(0, xl_s.ncols):
            cell_obj = xl_s.cell(row_idx, col_idx)
            r_list.append(cell_obj.value)
    print r_list

    rd = {}
    #Access name of Rhino
    rd['Bo']
    #Access X value only
    rd['Bo'][0]

    #Setting an array
    rd['Bo'] = [[26.98538,-19.1136]]
    rd['Bo'].append([26.98616, -19.1128])
    rd['Bo']

    #set for loop for coordinate pair
    for coordpair in rd['Bo']:
        print coordpair
        print rd

        #Call on the dictionary keys
        for key in rd.keys():
            print key, rd[key]


            #Look for Patches in dictionary
            'Patches' in rd.keys()

            #Seeing Index for list
            rd['Bo'] [0]

            #Seeng index for Y coordinate only of one particular record
            rd['Bo'][0][0]

            #Appending another coordinate pair to Bo
            rd['Bo'].append([26.9875, -19.11317])

            #Make Patches Access of name and append
            rd['Patches'] = [[26.97651, -19.11269]]
            rd

            #Print records of both Patches and Bo
            for key in rd.keys():
                print key, rd[key]


            for key in rd.keys():
                print key
                for cp in rd[key]:
                    print cp
                
        
        



#open workbook


#global variables

#main program


