DROP TABLE skus;

CREATE TABLE skus (
  id INT,
  styleId INT,
  size VARCHAR(50),
  quantity INT,
  FOREIGN KEY (styleId) REFERENCES styles(id) ON DELETE CASCADE
);

COPY skus (id, styleId, size, quantity)
FROM '/Users/isaiahsmith/Desktop/skus.csv' DELIMITER ',' CSV HEADER;

-- CREATE INDEX skus_index ON id (id);