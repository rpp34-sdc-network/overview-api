const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  features: [{type: mongoose.Types.ObjectId, ref: 'featureSchema'}],
  styles: [{type: mongoose.Types.ObjectId, ref: 'styleSchema'}]
  related: [{type: mongoose.Types.ObjectId, ref: 'relatedSchema'}]
});

const featureSchema = new mongoose.Schema({
  feature: String,
  value: String
});

const styleSchema = new mongoose.Schema({
  product_id: Number,
  results: [{type: mongoose.Types.ObjectId, ref: 'resultSchema'}],
  skus: [{type: mongoose.Types.ObjectId, ref: 'skuSchema'}]
});

const resultSchema = new mongoose.Schema({
  style_id: Number,
  name: String,
  original_price: String,
  sale_price: String,
  default?: Boolean,
  photos: [{type: mongoose.Types.ObjectId, ref: 'photoSchema'}]
})

const photoSchema = new mongoose.Schema({
  thumbnail_url: String,
  url: String
})

const skuSchema = new mongoose.Schema({
  sku_id: String,
  quantity: Number,
  size: String
})

const relatedSchema = new mongoose.Schema({
  product_id: Number,
  other_id: Number
})