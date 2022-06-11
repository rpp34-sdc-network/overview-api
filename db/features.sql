DROP TABLE IF EXISTS features;

CREATE TABLE features (
  id INT,
  product_id INT,
  feature VARCHAR(50),
  feature_value VARCHAR(50),
  FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE CASCADE
);

COPY features (id, product_id, feature, feature_value)
FROM '/Users/isaiahsmith/Desktop/features.csv' DELIMITER ',' CSV HEADER;

--CREATE INDEX photo_index ON photos(id);