import arcpy

mxd = arcpy.mapping.MapDocument(r"C:\Users\Dave Metzler.SUMMIT\Documents\SUMMIT\BlackHills\Cottenwood\Overview Map.mxd")

for pageNum in range(1, mxd.dataDrivenPages.pageCount + 1):
  mxd.dataDrivenPages.currentPageID = pageNum
  #arcpy.AddMessage("Exporting PDF Map " + str(pageNum) + " of " + str(mxd.dataDrivenPages.pageCount))
  pageName = mxd.dataDrivenPages.pageRow.OWNER + " - " + mxd.dataDrivenPages.pageRow.PARCELNB
  arcpy.mapping.ExportToPDF(mxd, r"C:\Users\Dave Metzler.SUMMIT\Documents\SUMMIT\BlackHills\Cottenwood\Exports\Parcel Maps\Map-" + pageName + ".pdf", resolution=250)
  print ("{} has been exported".format(pageName))