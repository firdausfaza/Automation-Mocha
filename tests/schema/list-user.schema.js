export const VALID_SCHEMA = {
    "type": "object",
    "default": {},
    "required": [
        "page",
        "per_page",
        "total",
        "total_pages",
        "data",
        "support"
    ],
    "properties": {
        "page": {
            "type": "integer",
            "default": 0
        },
        "per_page": {
            "type": "integer",
            "default": 0
        },
        "total": {
            "type": "integer",
            "default": 0
        },
        "total_pages": {
            "type": "integer",
            "default": 0
        },
        "data": {
            "type": "array",
            "default": [],
            "title": "The data Schema",
            "items": {
                "type": "object",
                "title": "A Schema",
                "required": [
                    "id",
                    "email",
                    "first_name",
                    "last_name",
                    "avatar"
                ],
                "properties": {
                    "id": {
                        "type": "integer"
                    },
                    "email": {
                        "type": "string"
                    },
                    "first_name": {
                        "type": "string"
                    },
                    "last_name": {
                        "type": "string"
                    },
                    "avatar": {
                        "type": "string"
                    }
                }
            }
        },
        "support": {
            "type": "object",
            "default": {},
            "required": [
                "url",
                "text"
            ],
            "properties": {
                "url": {
                    "type": "string",
                    "default": ""
                },
                "text": {
                    "type": "string",
                    "default": ""
                }
            }
        }
    }
}