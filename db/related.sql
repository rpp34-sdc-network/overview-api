DROP TABLE related;

CREATE TABLE related (
  id INT,
  current_product_id INT,
  related_product_id INT,
  FOREIGN KEY (current_product_id) REFERENCES product(id) ON DELETE CASCADE
);

COPY related (id, current_product_id, related_product_id)
FROM '/Users/isaiahsmith/Desktop/related.csv' DELIMITER ',' CSV HEADER;

--CREATE INDEX related_index ON related (id);