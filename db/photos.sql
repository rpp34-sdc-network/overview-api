DROP TABLE photos;

CREATE TABLE photos (
  id INT,
  styleId INT,
  photo_url TEXT,
  thumbnail_url TEXT,
  FOREIGN KEY (styleId) REFERENCES styles(id) ON DELETE CASCADE
);

COPY photos(id, styleId, photo_url, thumbnail_url)
FROM '/Users/isaiahsmith/Desktop/photos.csv' DELIMITER ',' CSV HEADER;

--CREATE INDEX photo_index ON photos(id);