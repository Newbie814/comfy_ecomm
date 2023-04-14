exports.handler = async (event, context) => {
  if (event.body) {
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body);
    console.log(cart, shipping_fee, total_amount);
    return {
      statusCode: 200,
      body: JSON.stringify(cart),
    };
  }
  return {
    statusCode: 200,
    body: 'Create Payment Intent',
  };
};
