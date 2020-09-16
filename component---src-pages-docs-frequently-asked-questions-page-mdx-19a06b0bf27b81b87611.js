(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"LS0/":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("hhGP"),s=(a("qKvR"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/docs/frequently-asked-questions-page.mdx"}});var l={_frontmatter:s},c=r.a;function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(c,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),Object(o.b)("h3",{id:"can-i-join--query-multiple-tables-at-one-time"},"Can I join / query multiple tables at one time?"),Object(o.b)("p",null,"Not in the Explore or Visualization UI. A Superset SQLAlchemy datasource can only be a single table\nor a view."),Object(o.b)("p",null,"When working with tables, the solution would be to materialize a table that contains all the fields\nneeded for your analysis, most likely through some scheduled batch process."),Object(o.b)("p",null,"A view is a simple logical layer that abstract an arbitrary SQL queries as a virtual table. This can\nallow you to join and union multiple tables, and to apply some transformation using arbitrary SQL\nexpressions. The limitation there is your database performance as Superset effectively will run a\nquery on top of your query (view). A good practice may be to limit yourself to joining your main\nlarge table to one or many small tables only, and avoid using ",Object(o.b)("em",{parentName:"p"},"GROUP BY")," where possible as Superset\nwill do its own ",Object(o.b)("em",{parentName:"p"},"GROUP BY")," and doing the work twice might slow down performance."),Object(o.b)("p",null,"Whether you use a table or a view, the important factor is whether your database is fast enough to\nserve it in an interactive fashion to provide a good user experience in Superset."),Object(o.b)("h3",{id:"how-big-can-my-datasource-be"},"How BIG can my datasource be?"),Object(o.b)("p",null,"It can be gigantic! Superset acts as a thin layer above your underlying databases or data engines."),Object(o.b)("p",null,"As mentioned above, the main criteria is whether your database can execute queries and return\nresults in a time frame that is acceptable to your users. Many distributed databases out there can\nexecute queries that scan through terabytes in an interactive fashion."),Object(o.b)("h3",{id:"how-do-i-create-my-own-visualization"},"How do I create my own visualization?"),Object(o.b)("p",null,"We recommend reading the instructions in\n",Object(o.b)("a",{href:"/docs/installation/building-custom-viz-plugins",parentName:"p"},"Building Custom Viz Plugins"),"."),Object(o.b)("h3",{id:"can-i-upload-and-visualize-csv-data"},"Can I upload and visualize CSV data?"),Object(o.b)("p",null,"Absolutely! Read the instructions ",Object(o.b)("a",{href:"/docs/creating-charts-dashboards/exploring-data",parentName:"p"},"here")," to learn\nhow to enable and use CSV upload."),Object(o.b)("h3",{id:"why-are-my-queries-timing-out"},"Why are my queries timing out?"),Object(o.b)("p",null,"There are many reasons may cause long query timing out."),Object(o.b)("p",null,"For running long query from Sql Lab, by default Superset allows it run as long as 6 hours before it\nbeing killed by celery. If you want to increase the time for running query, you can specify the\ntimeout in configuration. For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"SQLLAB_ASYNC_TIME_LIMIT_SEC = 60 * 60 * 6\n")),Object(o.b)("p",null,"Superset is running on gunicorn web server, which may time out web requests. If you want to increase\nthe default (50), you can specify the timeout when starting the web server with the -t flag, which\nis expressed in seconds."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"superset runserver -t 300\n")),Object(o.b)("p",null,"If you are seeing timeouts (504 Gateway Time-out) when loading dashboard or explore slice, you are\nprobably behind gateway or proxy server (such as Nginx). If it did not receive a timely response\nfrom Superset server (which is processing long queries), these web servers will send 504 status code\nto clients directly. Superset has a client-side timeout limit to address this issue. If query didn’t\ncome back within clint-side timeout (60 seconds by default), Superset will display warning message\nto avoid gateway timeout message. If you have a longer gateway timeout limit, you can change the\ntimeout settings in ",Object(o.b)("strong",{parentName:"p"},"superset_config.py"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"SUPERSET_WEBSERVER_TIMEOUT = 60\n")),Object(o.b)("h3",{id:"why-is-the-map-not-visible-in-the-geospatial-visualization"},"Why is the map not visible in the geospatial visualization?"),Object(o.b)("p",null,"You need to register a free account at ",Object(o.b)("a",{href:"www.mapbox.com",parentName:"p"},"Mapbox.com"),", obtain an API key, and add it\nto ",Object(o.b)("strong",{parentName:"p"},"superset_config.py")," at the key MAPBOX_API_KEY:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'MAPBOX_API_KEY = "longstringofalphanumer1c"\n')),Object(o.b)("h3",{id:"how-to-add-dynamic-filters-to-a-dashboard"},"How to add dynamic filters to a dashboard?"),Object(o.b)("p",null,"Use the ",Object(o.b)("strong",{parentName:"p"},"Filter Box")," widget, build a slice, and add it to your dashboard."),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Filter Box")," widget allows you to define a query to populate dropdowns that can be used for\nfiltering. To build the list of distinct values, we run a query, and sort the result by the metric\nyou provide, sorting descending."),Object(o.b)("p",null,"The widget also has a checkbox ",Object(o.b)("strong",{parentName:"p"},"Date Filter"),", which enables time filtering capabilities to your\ndashboard. After checking the box and refreshing, you’ll see a from and a to dropdown show up."),Object(o.b)("p",null,"By default, the filtering will be applied to all the slices that are built on top of a datasource\nthat shares the column name that the filter is based on. It’s also a requirement for that column to\nbe checked as “filterable” in the column tab of the table editor."),Object(o.b)("p",null,"But what about if you don’t want certain widgets to get filtered on your dashboard? You can do that\nby editing your dashboard, and in the form, edit the JSON Metadata field, more specifically the\n",Object(o.b)("inlineCode",{parentName:"p"},"filter_immune_slices")," key, that receives an array of sliceIds that should never be affected by any\ndashboard level filtering."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n    "filter_immune_slices": [324, 65, 92],\n    "expanded_slices": {},\n    "filter_immune_slice_fields": {\n        "177": ["country_name", "__time_range"],\n        "32": ["__time_range"]\n    },\n    "timed_refresh_immune_slices": [324]\n}\n')),Object(o.b)("p",null,"In the json blob above, slices 324, 65 and 92 won’t be affected by any dashboard level filtering."),Object(o.b)("p",null,"Now note the ",Object(o.b)("inlineCode",{parentName:"p"},"filter_immune_slice_fields")," key. This one allows you to be more specific and define\nfor a specific slice_id, which filter fields should be disregarded."),Object(o.b)("p",null,"Note the use of the ",Object(o.b)("inlineCode",{parentName:"p"},"__time_range")," keyword, which is reserved for dealing with the time boundary\nfiltering mentioned above."),Object(o.b)("p",null,"But what happens with filtering when dealing with slices coming from different tables or databases?\nIf the column name is shared, the filter will be applied, it’s as simple as that."),Object(o.b)("h3",{id:"how-to-limit-the-timed-refresh-on-a-dashboard"},"How to limit the timed refresh on a dashboard?"),Object(o.b)("p",null,"By default, the dashboard timed refresh feature allows you to automatically re-query every slice on\na dashboard according to a set schedule. Sometimes, however, you won’t want all of the slices to be\nrefreshed - especially if some data is slow moving, or run heavy queries. To exclude specific slices\nfrom the timed refresh process, add the ",Object(o.b)("inlineCode",{parentName:"p"},"timed_refresh_immune_slices")," key to the dashboard JSON\nMetadata field:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n   "filter_immune_slices": [],\n    "expanded_slices": {},\n    "filter_immune_slice_fields": {},\n    "timed_refresh_immune_slices": [324]\n}\n')),Object(o.b)("p",null,"In the example above, if a timed refresh is set for the dashboard, then every slice except 324 will\nbe automatically re-queried on schedule."),Object(o.b)("p",null,"Slice refresh will also be staggered over the specified period. You can turn off this staggering by\nsetting the ",Object(o.b)("inlineCode",{parentName:"p"},"stagger_refresh")," to false and modify the stagger period by setting ",Object(o.b)("inlineCode",{parentName:"p"},"stagger_time")," to a\nvalue in milliseconds in the JSON Metadata field:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n    "stagger_refresh": false,\n    "stagger_time": 2500\n}\n')),Object(o.b)("p",null,"Here, the entire dashboard will refresh at once if periodic refresh is on. The stagger time of 2.5\nseconds is ignored."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Why does ‘flask fab’ or superset freezed/hung/not responding when started (my home directory is\nNFS mounted)?")),Object(o.b)("p",null,"By default, Superset creates and uses an SQLite database at ",Object(o.b)("inlineCode",{parentName:"p"},"~/.superset/superset.db"),". SQLite is\nknown to ",Object(o.b)("a",{href:"https://www.sqlite.org/lockingv3.html",parentName:"p"},"not work well if used on NFS")," due to broken file\nlocking implementation on NFS."),Object(o.b)("p",null,"You can override this path using the ",Object(o.b)("strong",{parentName:"p"},"SUPERSET_HOME")," environment variable."),Object(o.b)("p",null,"Another workaround is to change where superset stores the sqlite database by adding the following in\n",Object(o.b)("inlineCode",{parentName:"p"},"superset_config.py"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"SQLALCHEMY_DATABASE_URI = 'sqlite:////new/location/superset.db'\n")),Object(o.b)("p",null,"You can read more about customizing Superset using the configuration file\n",Object(o.b)("a",{href:"/docs/installation/configuring-superset",parentName:"p"},"here"),"."),Object(o.b)("h3",{id:"what-if-the-table-schema-changed"},"What if the table schema changed?"),Object(o.b)("p",null,"Table schemas evolve, and Superset needs to reflect that. It’s pretty common in the life cycle of a\ndashboard to want to add a new dimension or metric. To get Superset to discover your new columns,\nall you have to do is to go to ",Object(o.b)("strong",{parentName:"p"},"Menu -> Sources -> Tables"),", click the edit icon next to the table\nwho’s schema has changed, and hit ",Object(o.b)("strong",{parentName:"p"},"Save")," from the ",Object(o.b)("strong",{parentName:"p"},"Detail")," tab. Behind the scene, the new\ncolumns will get merged it. Following this, you may want to re-edit the table afterwards to\nconfigure the Column tab, check the appropriate boxes and save again."),Object(o.b)("h3",{id:"what-database-engine-can-i-use-as-a-backend-for-superset"},"What database engine can I use as a backend for Superset?"),Object(o.b)("p",null,"To clarify, the database backend is an OLTP database used by Superset to store its internal\ninformation like your list of users, slices and dashboard definitions."),Object(o.b)("p",null,"Superset is tested using Mysql, Postgresql and Sqlite for its backend. It’s recommended you install\nSuperset on one of these database server for production."),Object(o.b)("p",null,"Using a column-store, non-OLTP databases like Vertica, Redshift or Presto as a database backend\nsimply won’t work as these databases are not designed for this type of workload. Installation on\nOracle, Microsoft SQL Server, or other OLTP databases may work but isn’t tested."),Object(o.b)("p",null,"Please note that pretty much any databases that have a SqlAlchemy integration should work perfectly\nfine as a datasource for Superset, just not as the OLTP backend."),Object(o.b)("h3",{id:"how-can-i-configure-oauth-authentication-and-authorization"},"How can I configure OAuth authentication and authorization?"),Object(o.b)("p",null,"You can take a look at this Flask-AppBuilder\n",Object(o.b)("a",{href:"https://github.com/dpgaspar/Flask-AppBuilder/blob/master/examples/oauth/config.py",parentName:"p"},"configuration example"),"."),Object(o.b)("h3",{id:"how-can-i-set-a-default-filter-on-my-dashboard"},"How can I set a default filter on my dashboard?"),Object(o.b)("p",null,"Simply apply the filter and save the dashboard while the filter is active."),Object(o.b)("h3",{id:"how-do-i-get-superset-to-refresh-the-schema-of-my-table"},"How do I get Superset to refresh the schema of my table?"),Object(o.b)("p",null,"When adding columns to a table, you can have Superset detect and merge the new columns in by using\nthe “Refresh Metadata” action in the ",Object(o.b)("strong",{parentName:"p"},"Source -> Tables")," page. Simply check the box next to the\ntables you want the schema refreshed, and click ",Object(o.b)("strong",{parentName:"p"},"Actions -> Refresh Metadata"),"."),Object(o.b)("h3",{id:"is-there-a-way-to-force-the-use-specific-colors"},"Is there a way to force the use specific colors?"),Object(o.b)("p",null,"It is possible on a per-dashboard basis by providing a mapping of labels to colors in the JSON\nMetadata attribute using the ",Object(o.b)("inlineCode",{parentName:"p"},"label_colors")," key."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n    "label_colors": {\n        "Girls": "#FF69B4",\n        "Boys": "#ADD8E6"\n    }\n}\n')),Object(o.b)("h3",{id:"does-superset-work-with-insert-database-engine-here"},"Does Superset work with ","[insert database engine here]","?"),Object(o.b)("p",null,"The ",Object(o.b)("a",{href:"/docs/databases/installing-database-drivers",parentName:"p"},"Connecting to Databases section")," provides the best\noverview for supported databases. Database engines not listed on that page may work too. We rely on\nthe community to contribute to this knowledge base."),Object(o.b)("p",null,"For a database engine to be supported in Superset through the SQLAlchemy connector, it requires\nhaving a Python compliant ",Object(o.b)("a",{href:"https://docs.sqlalchemy.org/en/13/dialects/",parentName:"p"},"SQLAlchemy dialect")," as well\nas a ",Object(o.b)("a",{href:"https://www.python.org/dev/peps/pep-0249/",parentName:"p"},"DBAPI driver")," defined. Database that have limited\nSQL support may work as well. For instance it’s possible to connect to Druid through the SQLAlchemy\nconnector even though Druid does not support joins and subqueries. Another key element for a\ndatabase to be supported is through the Superset Database Engine Specification interface. This\ninterface allows for defining database-specific configurations and logic that go beyond the\nSQLAlchemy and DBAPI scope. This includes features like:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"date-related SQL function that allow Superset to fetch different time granularities when running\ntime-series queries"),Object(o.b)("li",{parentName:"ul"},"whether the engine supports subqueries. If false, Superset may run 2-phase queries to compensate\nfor the limitation"),Object(o.b)("li",{parentName:"ul"},"methods around processing logs and inferring the percentage of completion of a query"),Object(o.b)("li",{parentName:"ul"},"technicalities as to how to handle cursors and connections if the driver is not standard DBAPI")),Object(o.b)("p",null,"Beyond the SQLAlchemy connector, it’s also possible, though much more involved, to extend Superset\nand write your own connector. The only example of this at the moment is the Druid connector, which\nis getting superseded by Druid’s growing SQL support and the recent availability of a DBAPI and\nSQLAlchemy driver. If the database you are considering integrating has any kind of of SQL support,\nit’s probably preferable to go the SQLAlchemy route. Note that for a native connector to be possible\nthe database needs to have support for running OLAP-type queries and should be able to things that\nare typical in basic SQL:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"aggregate data"),Object(o.b)("li",{parentName:"ul"},"apply filters"),Object(o.b)("li",{parentName:"ul"},"apply HAVING-type filters"),Object(o.b)("li",{parentName:"ul"},"be schema-aware, expose columns and types")),Object(o.b)("h3",{id:"does-superset-offer-a-public-api"},"Does Superset offer a public API?"),Object(o.b)("p",null,"Yes, a public REST API, and the surface of that API formal is expanding steadily. Some of the\noriginal vision for the collection of endpoints under ",Object(o.b)("strong",{parentName:"p"},"/api/v1")," was originally specified in\n",Object(o.b)("a",{href:"https://github.com/apache/incubator-superset/issues/7259",parentName:"p"},"SIP-17")," and constant progress has been\nmade to cover more and more use cases."),Object(o.b)("p",null,"The API available is documented using ",Object(o.b)("a",{href:"https://swagger.io/",parentName:"p"},"Swagger")," and the documentation can be\nmade available under ",Object(o.b)("strong",{parentName:"p"},"/swagger/v1")," by enabling the following flag in ",Object(o.b)("inlineCode",{parentName:"p"},"superset_config.py"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"FAB_API_SWAGGER_UI = True\n")),Object(o.b)("p",null,"There are other undocumented ","[private]"," ways to interact with Superset programmatically that offer no\nguarantees and are not recommended but may fit your use case temporarily:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"using the ORM (SQLAlchemy) directly"),Object(o.b)("li",{parentName:"ul"},"using the internal FAB ModelView API (to be deprecated in Superset)"),Object(o.b)("li",{parentName:"ul"},"altering the source code in your fork")))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/docs/frequently-asked-questions-page.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-frequently-asked-questions-page-mdx-19a06b0bf27b81b87611.js.map