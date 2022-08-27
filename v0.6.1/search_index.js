var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = GeoJSON","category":"page"},{"location":"#GeoJSON","page":"Home","title":"GeoJSON","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for GeoJSON.","category":"page"},{"location":"","page":"Home","title":"Home","text":"See the GeoInterfaces.jl and Tables.jl documentation for most applicable methods.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [GeoJSON]","category":"page"},{"location":"#GeoJSON.GeoJSON","page":"Home","title":"GeoJSON.GeoJSON","text":"GeoJSON\n\n(Image: ) (Image: ) (Image: CI) (Image: codecov)\n\nRead GeoJSON files using JSON3.jl, and provide the Tables.jl interface.\n\nThis package is heavily inspired by, and borrows code from, JSONTables.jl, which does the same thing for the general JSON format. GeoJSON puts the geometry in a geometry column, and adds all properties in the columns individually.\n\nUsage\n\njulia> using GeoJSON, DataFrames\n\njulia> jsonbytes = read(\"path/to/a.geojson\");\n\njulia> fc = GeoJSON.read(jsonbytes)\nFeatureCollection with 171 Features\n\njulia> first(fc)\nFeature with geometry type Polygon and properties Symbol[:geometry, :timestamp, :version, :changeset, :user, :uid, :area, :highway, :type, :id]\n\n# use the Tables interface to convert the format, extract data, or iterate over the rows\njulia> df = DataFrame(fc)\n\n\n\n\n\n","category":"module"},{"location":"#GeoJSON.Feature","page":"Home","title":"GeoJSON.Feature","text":"Feature\n\nA feature wrapping the JSON object.\n\n\n\n\n\n","category":"type"},{"location":"#GeoJSON.FeatureCollection","page":"Home","title":"GeoJSON.FeatureCollection","text":"FeatureCollection <: AbstractVector{Feature}\n\nA feature collection wrapping a JSON object.\n\nFollows the julia AbstractArray interface as a lazy vector of Feature, and similarly the GeoInterface.jl interface.\n\n\n\n\n\n","category":"type"},{"location":"#GeoJSON.features-Tuple{GeoJSON.FeatureCollection}","page":"Home","title":"GeoJSON.features","text":"features(fc::FeatureCollection)\n\nAccess the vector of features in the FeatureCollection\n\n\n\n\n\n","category":"method"},{"location":"#GeoJSON.geometry-Tuple{Any}","page":"Home","title":"GeoJSON.geometry","text":"geometry(g)\n\nConvert a GeoJSON geometry from JSON style object to a struct specific to that geometry type.\n\n\n\n\n\n","category":"method"},{"location":"#GeoJSON.geometry-Tuple{GeoJSON.Feature}","page":"Home","title":"GeoJSON.geometry","text":"geometry(f::Feature)\n\nAccess the JSON object that represents the Feature's geometry\n\n\n\n\n\n","category":"method"},{"location":"#GeoJSON.object-Tuple{Union{GeoJSON.Geometry, GeoJSON.Feature, GeoJSON.FeatureCollection}}","page":"Home","title":"GeoJSON.object","text":"object(x::GeoJSONObject)\n\nAccess the object underlying the GeoJSONObject. This can be any object that meets the GeoJSON specification. When reading a file it will generally be a JSON3.Object. When constructed in code that can also be a NamedTuple for instance. Either will serialize correctly back to GeoJSON strings.\n\n\n\n\n\n","category":"method"},{"location":"#GeoJSON.properties-Tuple{GeoJSON.Feature}","page":"Home","title":"GeoJSON.properties","text":"properties(f::Union{Feature,FeatureCollection})\n\nAccess the properties JSON object of a Feature\n\n\n\n\n\n","category":"method"},{"location":"#GeoJSON.read-Tuple{Any}","page":"Home","title":"GeoJSON.read","text":"read(source)\n\nRead a GeoJSON string to a GeoInterface.jl compatible feature or geometry object.\n\n\n\n\n\n","category":"method"},{"location":"#GeoJSON.write-Tuple{Any}","page":"Home","title":"GeoJSON.write","text":"write([io], geometry)\n\nWrite a GeoInterface.jl compatible feature or geometry to a GeoJSON String.\n\nio may be a filename String or IO object.\n\n\n\n\n\n","category":"method"}]
}
