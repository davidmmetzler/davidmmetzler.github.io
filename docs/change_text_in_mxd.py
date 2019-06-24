

import arcpy
from arcpy import env
import os
env.workspace = r"C:\Users\Dave Metzler.SUMMIT\Documents\SUMMIT\BlackHills\Cottenwood"
export_path = r'C:\Users\Dave Metzler.SUMMIT\Documents\SUMMIT\BlackHills\Cottenwood\Exports'
mxd_list = arcpy.ListFiles("*.mxd")
#print mxd_list
def change_elements():
    for mxdname in mxd_list:
        print mxdname
        mxd = arcpy.mapping.MapDocument( r"C:\Users\Dave Metzler.SUMMIT\Documents\SUMMIT\BlackHills\Cottenwood" + "\\" + mxdname)
        for elm in arcpy.mapping.ListLayoutElements(mxd, "TEXT_ELEMENT"):
            #fixed indent and replaced equality test.
            elm.text = elm.text.replace('6" STEEL FBE X-52','6" STEEL X-52')
            #elm.text = elm.text.replace('Wall Thickness = 0.195', 'Wall Thickness = 0.280')
        mxd.save()
    del mxd

    #deosnt quite work
def identify_bore_sheets():
    for mxdname in mxd_list:
        #print mxdname
        mxd = arcpy.mapping.MapDocument( r"C:\Users\Dave Metzler.SUMMIT\Documents\SUMMIT\BlackHills\Cottenwood" + "\\" + mxdname)
        for elm in arcpy.mapping.ListLayoutElements(mxd, "TEXT_ELEMENT"):
            if elm.text.startswith('BORED'):
                x = elm.elementPositionX
                y = elm.elementPositionY
                print "{} has a bore at {}, {}".format(mxdname,x,y)


        #mxd.save()
    del mxd

def export_maps():
    for mxdname in mxd_list:
        name = os.path.splitext(mxdname)[0]
        mxd = arcpy.mapping.MapDocument(r"C:\Users\Dave Metzler.SUMMIT\Documents\SUMMIT\BlackHills\Cottenwood" + "\\" + mxdname)
        arcpy.mapping.ExportToPDF(mxd, export_path + '\\' + name + '.pdf')
        print ("{} this bad boy was exported".format(name))



#identify_bore_sheets()
#change_elements()
export_maps()