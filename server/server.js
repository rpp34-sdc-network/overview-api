const express = require('express');
const app = express();
const pool = require('../db/index.js');

app.use(express.json());

app.get(`/products`, (req, res) => {
  pool.query(`SELECT * FROM product`)
    .then(output => {
      res.send(output);
   });
});

app.get(`/products/:id`, (req, res) => {
  var id = req.params.id;
  var product;
  pool.query(`SELECT product.id, product.product_name as name, product.slogan, product.product_description, product.category, product.default_price, json_agg(json_build_object('feature', features.feature, 'value', features.feature_value)) AS features FROM product LEFT JOIN features ON features.product_id = product.id WHERE features.product_id = ${id} GROUP BY product.id`)
    .then(output => {
      product = output.rows[0];
      res.send(product);
   });
});

app.get(`/products/:id/styles`, (req, res) => {
  var id = req.params.id;
  var styles = {'product_id': id};
  styles['results'] = [];
  pool.query(`SELECT styles.id as style_id, styles.styles_name as name, styles.original_price, styles.sale_price, styles.default_style as default, json_agg(json_build_object('thumbnail_url', photos.thumbnail_url, 'url', photos.photo_url)) AS photos FROM styles LEFT JOIN photos ON photos.styleid = styles.id WHERE styles.productid = ${id} GROUP BY styles.id`)
    .then(output => {
      styles.results = output.rows;
      res.send(styles);
    })
}); //Check default prompt

app.get(`/products/:id/related`, (req, res) => {
  var id = req.params.id;
  var related = [];
  pool.query(`SELECT related.related_product_id FROM related WHERE related.current_product_id = ${id}`)
    .then(output => {
      output.rows.forEach((related_id) => related.push(related_id.related_product_id));
      res.send(related);
   });
});

module.exports = app;