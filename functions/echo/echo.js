exports.handler = async function (event, context) {
  context.clientContext = {
    name: "Taimoor khan",
    time: new Date().toDateString(),
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Function invoked successfull!!",
      data: context,
    }),
  }
}
