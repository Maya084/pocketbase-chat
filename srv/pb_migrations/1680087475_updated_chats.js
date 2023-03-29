migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j8g09v2vcmk2qqt")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pcmonimk",
    "name": "users",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j8g09v2vcmk2qqt")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pcmonimk",
    "name": "users",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
