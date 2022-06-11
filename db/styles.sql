DROP TABLE IF EXISTS styles;

CREATE TABLE styles (
  id INT,
  productId INT,
  styles_name TEXT,
  sale_price VARCHAR(50),
  original_price VARCHAR(50),
  default_style BOOLEAN,
  PRIMARY KEY (id),
  FOREIGN KEY (productId) REFERENCES product(id) ON DELETE CASCADE
);

COPY styles (id, productId, styles_name, sale_price, original_price, default_style)
FROM '/Users/isaiahsmith/Desktop/styles.csv' DELIMITER ',' CSV HEADER;

-- CREATE INDEX product_index ON product (id);