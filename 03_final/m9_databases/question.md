### Question

The big differences between relational (aka SQL databases) and document based databases (e.g. MongoDB and CouchDB) are all of the following, except (pick one):

1. The structure of data (schema) is defined in the client in document db's whereas it is defined in the tables in SQL.
2. Document databases allow allow embedding functions that run in the database.
3. Both allow specifying logical relations between entities (douments or tables), but relational databases enforce these constraints.
4. The schema flexibility of document databases make them suitable for quick experimentation.

### Answer: skipped

Correct answer is 2.  SQL has in-database procedures called stored procedures.  Mongo doesn't have them.
To the best of my knowledge other document db's also don't.