DROP TABLE IF EXISTS product;

CREATE TABLE product (
  id INT,
  product_name VARCHAR(50),
  slogan TEXT,
  product_description TEXT,
  category VARCHAR(50),
  default_price VARCHAR(50),
  PRIMARY KEY (id)
);

COPY product (id, product_name, slogan, product_description, category, default_price)
FROM '/Users/isaiahsmith/Desktop/product.csv' DELIMITER ',' CSV HEADER;

-- CREATE INDEX product_index ON product (id);