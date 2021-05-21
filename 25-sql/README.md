# Intro to SQL

## What is SQL?
- Structured Query Language
- Language to manage (talk to) databases
- Analogy: excel spreadsheets (database); tabs (tables)

- What problems does it solve?
    - persists data

- What kind of databases are there?
    - relational database: all the data is structured
    - non relational database: unstructured data

- What is CRUD?
    - Create data
    - Read data
    - Update data
    - Delete data

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below


## ERD
<img src="erd.jpg" style="display:inline"  alt="erd of today's activity">

## Challenges

1. Write the SQL to return all of the rows in the artists table?

```SQL
-- display everything in the artists table 
SELECT * FROM artists;
```

2. Write the SQL to select the artist with the name "Foo Fighters"

```SQL
SELECT * FROM artists WHERE name="Foo Fighters";
```

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

```sql
CREATE TABLE fans(
	id INTEGER PRIMARY KEY,
	name TEXT
);
```

4. Write the SQL to alter the fans table to have a artist_id column type integer?

```sql
ALTER TABLE fans ADD COLUMN artist_id integer;
```

5. Write the SQL to add yourself as a fan of Green Day (id 54)

```sql
insert into fans (name, artist_id) values ("Toni", 54);
```

6. How would you update your name in the fans table to be your new name?

 ```sql
update fans set name="Genie" where id=3;
 ```

6.5. How would you delete a fan?

```sql
delete from fans where id=1;
```

7. Write the SQL to return fans that are not fans of the black eyed peas.

```sql
-- look up artist id first
SELECT * FROM artists WHERE name="Black Eyed Peas";

-- display non-fans of Black Eyed Peas
select * from fans where artist_id != 169;
```

8. Write the SQL to display an artists name next to their album title

```sql
select name, title from artists
join albums
on artists.id = albums.artist_id;
```

9. Write the SQL to display artist name, album title and number of tracks on that album

AGGREGATE FUNCTION

```sql
select artists.name, title, count(tracks.id) from artists
join albums
on artists.id = albums.artist_id
join tracks
on albums.id = tracks.album_id
group by albums.id;
```

