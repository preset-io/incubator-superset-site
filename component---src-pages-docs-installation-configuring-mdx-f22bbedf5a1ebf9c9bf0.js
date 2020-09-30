(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{bpau:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t("wx14"),r=t("zLVn"),o=(t("q1tI"),t("7ljp")),i=t("hhGP"),s=(t("qKvR"),{});void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/docs/installation/configuring.mdx"}});var l={_frontmatter:s},c=i.a;function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)(c,Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"configuring-superset"},"Configuring Superset"),Object(o.b)("h3",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"To configure your application, you need to create a file ",Object(o.b)("inlineCode",{parentName:"p"},"superset_config.py")," and add it to your\n",Object(o.b)("inlineCode",{parentName:"p"},"PYTHONPATH"),". Here are some of the parameters you can set in that file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"# Superset specific config\nROW_LIMIT = 5000\n\nSUPERSET_WEBSERVER_PORT = 8088\n\n# Flask App Builder configuration\n# Your App secret key\nSECRET_KEY = '\\2\\1thisismyscretkey\\1\\2\\e\\y\\y\\h'\n\n# The SQLAlchemy connection string to your database backend\n# This connection defines the path to the database that stores your\n# superset metadata (slices, connections, tables, dashboards, ...).\n# Note that the connection information to connect to the datasources\n# you want to explore are managed directly in the web UI\nSQLALCHEMY_DATABASE_URI = 'sqlite:////path/to/superset.db'\n\n# Flask-WTF flag for CSRF\nWTF_CSRF_ENABLED = True\n# Add endpoints that need to be exempt from CSRF protection\nWTF_CSRF_EXEMPT_LIST = []\n# A CSRF token that expires in 1 year\nWTF_CSRF_TIME_LIMIT = 60 * 60 * 24 * 365\n\n# Set this API key to enable Mapbox visualizations\nMAPBOX_API_KEY = ''\n")),Object(o.b)("p",null,"All the parameters and default values defined in\n",Object(o.b)("a",{href:"https://github.com/apache/incubator-superset/blob/master/superset/config.py",parentName:"p"},"https://github.com/apache/incubator-superset/blob/master/superset/config.py"),"\ncan be altered in your local ",Object(o.b)("inlineCode",{parentName:"p"},"superset_config.py"),". Administrators will want to read through the file\nto understand what can be configured locally as well as the default values in place."),Object(o.b)("p",null,"Since ",Object(o.b)("inlineCode",{parentName:"p"},"superset_config.py")," acts as a Flask configuration module, it can be used to alter the\nsettings Flask itself, as well as Flask extensions like ",Object(o.b)("inlineCode",{parentName:"p"},"flask-wtf"),", ",Object(o.b)("inlineCode",{parentName:"p"},"flask-cache"),", ",Object(o.b)("inlineCode",{parentName:"p"},"flask-migrate"),",\nand ",Object(o.b)("inlineCode",{parentName:"p"},"flask-appbuilder"),". Flask App Builder, the web framework used by Superset, offers many\nconfiguration settings. Please consult the\n",Object(o.b)("a",{href:"https://flask-appbuilder.readthedocs.org/en/latest/config.html",parentName:"p"},"Flask App Builder Documentation"),"\nfor more information on how to configure it."),Object(o.b)("p",null,"Make sure to change:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SQLALCHEMY_DATABASE_URI"),": by default it is stored at ~/.superset/superset.db"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SECRET_KEY"),": to a long random string")),Object(o.b)("p",null,"If you need to exempt endpoints from CSRF (e.g. if you are running a custom auth postback endpoint),\nyou can add the endpoints to ",Object(o.b)("inlineCode",{parentName:"p"},"WTF_CSRF_EXEMPT_LIST"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"WTF_CSRF_EXEMPT_LIST = [‘’]\n")),Object(o.b)("h3",{id:"flask-appbuilder-permissions"},"Flask AppBuilder Permissions"),Object(o.b)("p",null,"By default, every time the Flask-AppBuilder (FAB) app is initialized the permissions and views are\nadded automatically to the backend and associated with the ‘Admin’ role. The issue, however, is when\nyou are running multiple concurrent workers this creates a lot of contention and race conditions\nwhen defining permissions and views."),Object(o.b)("p",null,"To alleviate this issue, the automatic updating of permissions can be disabled by setting\n",Object(o.b)("inlineCode",{parentName:"p"},"FAB_UPDATE_PERMS = False")," (defaults to True)."),Object(o.b)("p",null,"In a production environment initialization could take on the following form:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"superset init gunicorn -w 10 … superset:app\n")),Object(o.b)("h3",{id:"running-on-a-wsgi-http-server"},"Running on a WSGI HTTP Server"),Object(o.b)("p",null,"While you can run Superset on NGINX or Apache, we recommend using Gunicorn in async mode. This\nenables impressive concurrency even and is fairly easy to install and configure. Please refer to the\ndocumentation of your preferred technology to set up this Flask WSGI application in a way that works\nwell in your environment. Here’s an async setup known to work well in production:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'      -w 10 \\\n      -k gevent \\\n      --timeout 120 \\\n      -b  0.0.0.0:6666 \\\n      --limit-request-line 0 \\\n      --limit-request-field_size 0 \\\n      --statsd-host localhost:8125 \\\n      "superset.app:create_app()"\n')),Object(o.b)("p",null,"Refer to the ",Object(o.b)("a",{href:"https://docs.gunicorn.org/en/stable/design.html",parentName:"p"},"Gunicorn documentation")," for more\ninformation. ",Object(o.b)("em",{parentName:"p"},"Note that the development web server (",Object(o.b)("inlineCode",{parentName:"em"},"superset run")," or ",Object(o.b)("inlineCode",{parentName:"em"},"flask run"),") is not intended\nfor production use.")),Object(o.b)("p",null,"If you're not using Gunicorn, you may want to disable the use of ",Object(o.b)("inlineCode",{parentName:"p"},"flask-compress")," by setting\n",Object(o.b)("inlineCode",{parentName:"p"},"COMPRESS_REGISTER = False")," in your ",Object(o.b)("inlineCode",{parentName:"p"},"superset_config.py"),"."),Object(o.b)("h3",{id:"configuration-behind-a-load-balancer"},"Configuration Behind a Load Balancer"),Object(o.b)("p",null,"If you are running superset behind a load balancer or reverse proxy (e.g. NGINX or ELB on AWS), you\nmay need to utilize a healthcheck endpoint so that your load balancer knows if your superset\ninstance is running. This is provided at ",Object(o.b)("inlineCode",{parentName:"p"},"/health")," which will return a 200 response containing “OK”\nif the the webserver is running."),Object(o.b)("p",null,"If the load balancer is inserting ",Object(o.b)("inlineCode",{parentName:"p"},"X-Forwarded-For/X-Forwarded-Proto")," headers, you should set\n",Object(o.b)("inlineCode",{parentName:"p"},"ENABLE_PROXY_FIX = True")," in the superset config file (",Object(o.b)("inlineCode",{parentName:"p"},"superset_config.py"),") to extract and use the\nheaders."),Object(o.b)("p",null,"In case the reverse proxy is used for providing SSL encryption, an explicit definition of the\n",Object(o.b)("inlineCode",{parentName:"p"},"X-Forwarded-Proto")," may be required. For the Apache webserver this can be set as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'RequestHeader set X-Forwarded-Proto "https"\n')),Object(o.b)("h3",{id:"custom-oauth2-configuration"},"Custom OAuth2 Configuration"),Object(o.b)("p",null,"Beyond FAB supported providers (Github, Twitter, LinkedIn, Google, Azure, etc), its easy to connect\nSuperset with other OAuth2 Authorization Server implementations that support “code” authorization."),Object(o.b)("p",null,"First, configure authorization in Superset ",Object(o.b)("inlineCode",{parentName:"p"},"superset_config.py"),"."),Object(o.b)("pre",null,Object(o.b)("code",{className:"language-python",parentName:"pre"},"AUTH_TYPE = AUTH_OAUTH\nOAUTH_PROVIDERS = [\n    {   'name':'egaSSO',\n        'token_key':'access_token', # Name of the token in the response of access_token_url\n        'icon':'fa-address-card',   # Icon for the provider\n        'remote_app': {\n            'consumer_key':'myClientId',  # Client Id (Identify Superset application)\n            'consumer_secret':'MySecret', # Secret for this Client Id (Identify Superset application)\n            'request_token_params':{\n                'scope': 'read'               # Scope for the Authorization\n            },\n            'access_token_method':'POST',    # HTTP Method to call access_token_url\n            'access_token_params':{        # Additional parameters for calls to access_token_url\n                'client_id':'myClientId'\n            },\n            'access_token_headers':{    # Additional headers for calls to access_token_url\n                'Authorization': 'Basic Base64EncodedClientIdAndSecret'\n            },\n            'base_url':'https://myAuthorizationServer/oauth2AuthorizationServer/',\n            'access_token_url':'https://myAuthorizationServer/oauth2AuthorizationServer/token',\n            'authorize_url':'https://myAuthorizationServer/oauth2AuthorizationServer/authorize'\n        }\n    }\n]\n\n# Will allow user self registration, allowing to create Flask users from Authorized User\nAUTH_USER_REGISTRATION = True\n\n# The default user self registration role\nAUTH_USER_REGISTRATION_ROLE = \"Public\"\n")),Object(o.b)("p",null,"Then, create a ",Object(o.b)("inlineCode",{parentName:"p"},"CustomSsoSecurityManager")," that extends ",Object(o.b)("inlineCode",{parentName:"p"},"SupersetSecurityManager")," and overrides\n",Object(o.b)("inlineCode",{parentName:"p"},"oauth_user_info"),":"),Object(o.b)("pre",null,Object(o.b)("code",{className:"language-python",parentName:"pre"},"from superset.security import SupersetSecurityManager\n\nclass CustomSsoSecurityManager(SupersetSecurityManager):\n\n    def oauth_user_info(self, provider, response=None):\n        logging.debug(\"Oauth2 provider: {0}.\".format(provider))\n        if provider == 'egaSSO':\n            # As example, this line request a GET to base_url + '/' + userDetails with Bearer  Authentication,\n    # and expects that authorization server checks the token, and response with user details\n            me = self.appbuilder.sm.oauth_remotes[provider].get('userDetails').data\n            logging.debug(\"user_data: {0}\".format(me))\n            return { 'name' : me['name'], 'email' : me['email'], 'id' : me['user_name'], 'username' : me['user_name'], 'first_name':'', 'last_name':''}\n    ...\n")),Object(o.b)("p",null,"This file must be located at the same directory than ",Object(o.b)("inlineCode",{parentName:"p"},"superset_config.py")," with the name\n",Object(o.b)("inlineCode",{parentName:"p"},"custom_sso_security_manager.py"),". Finally, add the following 2 lines to ",Object(o.b)("inlineCode",{parentName:"p"},"superset_config.py"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"from custom_sso_security_manager import CustomSsoSecurityManager\nCUSTOM_SECURITY_MANAGER = CustomSsoSecurityManager\n")),Object(o.b)("h3",{id:"feature-flags"},"Feature Flags"),Object(o.b)("p",null,"To support a diverse set of users, Superset has some features that are not enabled by default. For\nexample, some users have stronger security restrictions, while some others may not. So Superset\nallow users to enable or disable some features by config. For feature owners, you can add optional\nfunctionalities in Superset, but will be only affected by a subset of users."),Object(o.b)("p",null,"You can enable or disable features with flag from ",Object(o.b)("inlineCode",{parentName:"p"},"superset_config.py"),":"),Object(o.b)("pre",null,Object(o.b)("code",{className:"language-python",parentName:"pre"},"DEFAULT_FEATURE_FLAGS = {\n    'CLIENT_CACHE': False,\n    'ENABLE_EXPLORE_JSON_CSRF_PROTECTION': False,\n    'PRESTO_EXPAND_DATA': False,\n}\n")),Object(o.b)("p",null,"Here is a list of flags and descriptions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"ENABLE_EXPLORE_JSON_CSRF_PROTECTION"),": For some security concerns, you may need to enforce CSRF\nprotection on all query request to the ",Object(o.b)("inlineCode",{parentName:"p"},"explore_json")," endpoint. When\n",Object(o.b)("inlineCode",{parentName:"p"},"ENABLE_EXPLORE_JSON_CSRF_PROTECTION")," is set to true, your users cannot make GET request to\n",Object(o.b)("inlineCode",{parentName:"p"},"explore_json"),". The default value for this feature is ",Object(o.b)("inlineCode",{parentName:"p"},"False")," and ",Object(o.b)("inlineCode",{parentName:"p"},"explore_json")," will accept both\nGET and POST request. See ",Object(o.b)("a",{href:"https://github.com/apache/incubator-superset/pull/7935",parentName:"p"},"PR 7935")," for\nmore details.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"PRESTO_EXPAND_DATA"),": When this feature is enabled, nested types in Presto will be expanded into\nextra columns and / or arrays. This is experimental, and doesn’t work with all nested types."))),Object(o.b)("h3",{id:"sip-15"},"SIP 15"),Object(o.b)("p",null,Object(o.b)("a",{href:"https://github.com/apache/incubator-superset/issues/6360",parentName:"p"},"Superset Improvement Proposal 15")," aims to\nensure that time intervals are handled in a consistent and transparent manner for both the Druid and\nSQLAlchemy connectors."),Object(o.b)("p",null,"Prior to SIP-15 SQLAlchemy used inclusive endpoints however these may behave like exclusive for\nstring columns (due to lexicographical ordering) if no formatting was defined and the column\nformatting did not conform to an ISO 8601 date-time (refer to the SIP for details)."),Object(o.b)("p",null,"To remedy this rather than having to define the date/time format for every non-IS0 8601 date-time\ncolumn, once can define a default column mapping on a per database level via the ",Object(o.b)("inlineCode",{parentName:"p"},"extra")," parameter:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n    "python_date_format_by_column_name": {\n        "ds": "%Y-%m-%d"\n    }\n}\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"New Deployments")),Object(o.b)("p",null,"All new deployments should enable SIP-15 by setting this value in ",Object(o.b)("inlineCode",{parentName:"p"},"superset_config.py"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"SIP_15_ENABLED = True\n\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Existing Deployments")),Object(o.b)("p",null,"Given that it is not apparent whether the chart creator was aware of the time range inconsistencies\n(and adjusted the endpoints accordingly) changing the behavior of all charts is overly aggressive.\nInstead SIP-15 proivides a soft transistion allowing producers (chart owners) to see the impact of\nthe proposed change and adjust their charts accordingly."),Object(o.b)("p",null,"Prior to enabling SIP-15, existing deployments should communicate to their users the impact of the\nchange and define a grace period end date (exclusive of course) after which all charts will conform\nto the [start, end) interval."),Object(o.b)("pre",null,Object(o.b)("code",{className:"language-python",parentName:"pre"},"from dateime import date\n\nSIP_15_ENABLED = True\nSIP_15_GRACE_PERIOD_END = date(<YYYY>, <MM>, <DD>)\n")),Object(o.b)("p",null,"To aid with transparency the current endpoint behavior is explicitly called out in the chart time\nrange (post SIP-15 this will be [start, end) for all connectors and databases). One can override the\ndefaults on a per database level via the ",Object(o.b)("inlineCode",{parentName:"p"},"extra")," parameter."),Object(o.b)("pre",null,Object(o.b)("code",{className:"language-python",parentName:"pre"},'{\n    "time_range_endpoints": ["inclusive", "inclusive"]\n}\n')),Object(o.b)("p",null,"Note in a future release the interim SIP-15 logic will be removed (including the\n",Object(o.b)("inlineCode",{parentName:"p"},"time_grain_endpoints")," form-data field) via a code change and Alembic migration."))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/docs/installation/configuring.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-installation-configuring-mdx-f22bbedf5a1ebf9c9bf0.js.map