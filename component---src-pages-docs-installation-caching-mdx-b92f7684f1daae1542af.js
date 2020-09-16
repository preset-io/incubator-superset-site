(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{GlUp:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return p}));var a=t("wx14"),c=t("zLVn"),s=(t("q1tI"),t("7ljp")),i=t("hhGP"),o=(t("qKvR"),{});void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/docs/installation/caching.mdx"}});var r={_frontmatter:o},l=i.a;function p(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(s.b)(l,Object(a.a)({},r,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"caching"},"Caching"),Object(s.b)("p",null,"Superset uses ",Object(s.b)("a",{href:"https://pythonhosted.org/Flask-Cache/",parentName:"p"},"Flask-Cache")," for caching purpose. Configuring\nyour caching backend is as easy as providing a ",Object(s.b)("inlineCode",{parentName:"p"},"CACHE_CONFIG"),", constant in your ",Object(s.b)("inlineCode",{parentName:"p"},"superset_config.py"),"\nthat complies with the Flask-Cache specifications."),Object(s.b)("p",null,"Flask-Cache supports multiple caching backends (Redis, Memcached, SimpleCache (in-memory), or the\nlocal filesystem)."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Memcached: we recommend using ",Object(s.b)("a",{href:"https://pypi.org/project/pylibmc/",parentName:"li"},"pylibmc")," client library as\n",Object(s.b)("inlineCode",{parentName:"li"},"python-memcached")," does not handle storing binary data correctly."),Object(s.b)("li",{parentName:"ul"},"Redis: we recommend the ",Object(s.b)("a",{href:"https://pypi.python.org/pypi/redis",parentName:"li"},"redis")," Python package")),Object(s.b)("p",null,"Both of these libraries can be installed using pip."),Object(s.b)("p",null,"For setting your timeouts, this is done in the Superset metadata and goes up the “timeout\nsearchpath”, from your slice configuration, to your data source’s configuration, to your database’s\nand ultimately falls back into your global default defined in ",Object(s.b)("inlineCode",{parentName:"p"},"CACHE_CONFIG"),"."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"CACHE_CONFIG = {\n    'CACHE_TYPE': 'redis',\n    'CACHE_DEFAULT_TIMEOUT': 60 * 60 * 24, # 1 day default (in secs)\n    'CACHE_KEY_PREFIX': 'superset_results',\n    'CACHE_REDIS_URL': 'redis://localhost:6379/0',\n}\n")),Object(s.b)("p",null,"It is also possible to pass a custom cache initialization function in the config to handle\nadditional caching use cases. The function must return an object that is compatible with the\n",Object(s.b)("a",{href:"https://pythonhosted.org/Flask-Cache/",parentName:"p"},"Flask-Cache API"),"."),Object(s.b)("pre",null,Object(s.b)("code",{className:"language-python",parentName:"pre"},"from custom_caching import CustomCache\n\ndef init_cache(app):\n    \"\"\"Takes an app instance and returns a custom cache backend\"\"\"\n    config = {\n        'CACHE_DEFAULT_TIMEOUT': 60 * 60 * 24, # 1 day default (in secs)\n        'CACHE_KEY_PREFIX': 'superset_results',\n    }\n    return CustomCache(app, config)\n\nCACHE_CONFIG = init_cache\n")),Object(s.b)("p",null,"Superset has a Celery task that will periodically warm up the cache based on different strategies.\nTo use it, add the following to the ",Object(s.b)("inlineCode",{parentName:"p"},"CELERYBEAT_SCHEDULE")," section in ",Object(s.b)("inlineCode",{parentName:"p"},"config.py"),":"),Object(s.b)("pre",null,Object(s.b)("code",{className:"language-python",parentName:"pre"},"CELERYBEAT_SCHEDULE = {\n    'cache-warmup-hourly': {\n        'task': 'cache-warmup',\n        'schedule': crontab(minute=0, hour='*'),  # hourly\n        'kwargs': {\n            'strategy_name': 'top_n_dashboards',\n            'top_n': 5,\n            'since': '7 days ago',\n        },\n    },\n}\n")),Object(s.b)("p",null,"This will cache all the charts in the top 5 most popular dashboards every hour. For other\nstrategies, check the ",Object(s.b)("inlineCode",{parentName:"p"},"superset/tasks/cache.py")," file."),Object(s.b)("h3",{id:"caching-thumbnails"},"Caching Thumbnails"),Object(s.b)("p",null,"This is an optional feature that can be turned on by activating it’s feature flag on config:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'FEATURE_FLAGS = {\n    "THUMBNAILS": True,\n    "THUMBNAILS_SQLA_LISTENERS": True,\n}\n')),Object(s.b)("p",null,"For this feature you will need a cache system and celery workers. All thumbnails are store on cache\nand are processed asynchronously by the workers."),Object(s.b)("p",null,"An example config where images are stored on S3 could be:"),Object(s.b)("pre",null,Object(s.b)("code",{className:"language-python",parentName:"pre"},'from flask import Flask\nfrom s3cache.s3cache import S3Cache\n\n...\n\nclass CeleryConfig(object):\n    BROKER_URL = "redis://localhost:6379/0"\n    CELERY_IMPORTS = ("superset.sql_lab", "superset.tasks", "superset.tasks.thumbnails")\n    CELERY_RESULT_BACKEND = "redis://localhost:6379/0"\n    CELERYD_PREFETCH_MULTIPLIER = 10\n    CELERY_ACKS_LATE = True\n\n\nCELERY_CONFIG = CeleryConfig\n\ndef init_thumbnail_cache(app: Flask) -> S3Cache:\n    return S3Cache("bucket_name", \'thumbs_cache/\')\n\n\nTHUMBNAIL_CACHE_CONFIG = init_thumbnail_cache\n# Async selenium thumbnail task will use the following user\nTHUMBNAIL_SELENIUM_USER = "Admin"\n')),Object(s.b)("p",null,"Using the above example cache keys for dashboards will be ",Object(s.b)("inlineCode",{parentName:"p"},"superset_thumb__dashboard__{ID}"),". You can\noverride the base URL for selenium using:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'WEBDRIVER_BASEURL = "https://superset.company.com"\n')),Object(s.b)("p",null,"Additional selenium web drive configuration can be set using ",Object(s.b)("inlineCode",{parentName:"p"},"WEBDRIVER_CONFIGURATION"),". You can\nimplement a custom function to authenticate selenium. The default function uses the ",Object(s.b)("inlineCode",{parentName:"p"},"flask-login"),"\nsession cookie. Here's an example of a custom function signature:"),Object(s.b)("pre",null,Object(s.b)("code",{className:"language-python",parentName:"pre"},'def auth_driver(driver: WebDriver, user: "User") -> WebDriver:\n    pass\n')),Object(s.b)("p",null,"Then on configuration:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"WEBDRIVER_AUTH_FUNC = auth_driver\n")))}void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/docs/installation/caching.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-installation-caching-mdx-b92f7684f1daae1542af.js.map