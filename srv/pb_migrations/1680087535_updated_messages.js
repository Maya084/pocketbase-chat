migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("92iwjyxbm44y048")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yeghxa5i",
    "name": "chat_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "j8g09v2vcmk2qqt",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uqmeyxqi",
    "name": "author_id",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("92iwjyxbm44y048")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yeghxa5i",
    "name": "chat_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "j8g09v2vcmk2qqt",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uqmeyxqi",
    "name": "author_id",
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
})
