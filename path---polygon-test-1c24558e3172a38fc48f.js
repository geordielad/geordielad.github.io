webpackJsonp([0x7fd682583d8d,0x99703cc56f65],{331:function(e,t){e.exports={data:{markdownRemark:{html:'<h1>Python Example for Point-in-Polygon data</h1>\n<p><a href="http://geoffboeing.com/2014/09/using-geopandas-windows/">Using geopandas on Windows</a>\n<a href="https://gist.github.com/gboeing/a6fcb39a9010d142446f4a83e43d8d6c">GitHub gist</a></p>\n<p>Follow instructions here:</p>\n<p>Notes:</p>\n<ul>\n<li>I called my conda environment geopandas27 - and used Python 2.7</li>\n<li>I added openpyxl - this is the module used to open and parse Excel files - If you were reading CSV or SQL you would use other modules like csv, psyproj or SQL sqlalchemy .</li>\n<li>As I am documenting the setup and revisiting the code I am taking opportunities to make the code easier to use and understand but it\'s still hacky. Let\'s see if we can help each other make this code sharable with a wider audience.</li>\n</ul>\n<p><a href="https://www.microsoft.com/en-us/download/details.aspx?id=44266">Install Microsoft Visual C++ Compiler for Python 2.7</a></p>\n<p>Create a new environment for geopandas</p>\n<p>`conda create -n geopandas27 python=2 anaconda-client pywin32 psutil numexpr cython pytables sqlalchemy statsmodels bottleneck xlrd xlwt pillow matplotlib pandas scikit-learn jupyter requests networkx</p>\n<p>activate geopandas27</p>\n<p>pip install Rtree-0.8.3-cp27-cp27m-win<em>amd64.whl basemap-1.1.0-cp27-cp27m-win</em>amd64.whl GDAL-2.2.3-cp27-cp27m-win<em>amd64.whl Shapely-1.6.2-cp27-cp27m-win</em>amd64.whl Fiona-1.7.10-cp27-cp27m-win<em>amd64.whl pyproj-1.9.5.1-cp27-cp27m-win</em>amd64.whl geopy descartes geopandas osmnx openpyxl\n`</p>\n<p>If the environment installs without error your should be able to run the Point in polygon script:</p>\n<p>Notes:</p>\n<ul>\n<li>Assumes Project Data for Rural Eligibility Analysis.xlsx is on local directory</li>\n<li>Assumes shape file and related spatial files are in the local directory</li>\n<li>Script will create a test.csv output file</li>\n<li>It stakes a few seconds to open the Excel file then a few seconds for each phase of processing the data</li>\n<li>An important step in joining the spatial data polygon file to the point data is transforming the point lat/longs to the same projection as the polygon projection. This is done using pyProj. If you have a different shape fie in a different projection the transform will need to change. See <a href="https://gis.stackexchange.com/questions/78838/converting-projected-coordinates-to-lat-lon-using-python">https://gis.stackexchange.com/questions/78838/converting-projected-coordinates-to-lat-lon-using-python</a> for some useful details and <a href="https://jswhit.github.io/pyproj/">https://jswhit.github.io/pyproj/</a>. I have made the code a bit more general by reading the crs from the shape file and assuming the data file is in EPSG:4326. See <a href="https://gis.stackexchange.com/questions/3334/what-is-the-difference-between-wgs84-and-epsg4326">https://gis.stackexchange.com/questions/3334/what-is-the-difference-between-wgs84-and-epsg4326</a> fopr some background about the relationship between WGS84 and EPSG:4326 and <a href="https://en.wikipedia.org/wiki/Spatial_reference_system">https://en.wikipedia.org/wiki/Spatial<em>reference</em>system</a> for more general information about Spatial Reference Systems</li>\n<li>If you want to modify this script to work with different point files and different polygon shape files it should not be that hard. Indeed testing with different data sets would be a great way to learn how to generalise the approach. We could also compare it to the in database approach.</li>\n</ul>\n<p><code>python point_in_sfh_mfh_ineligible.py</code></p>',frontmatter:{date:"December 11, 2017",path:"/polygon-test",title:"Python Example for Point-in-Polygon data"}}},pathContext:{}}}});
//# sourceMappingURL=path---polygon-test-1c24558e3172a38fc48f.js.map