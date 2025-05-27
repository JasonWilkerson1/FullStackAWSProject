const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' }); // Match your region
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'Assets';

// Get all assets
async function getAssets() {
  const params = { TableName: TABLE_NAME };
  const data = await dynamoDB.scan(params).promise();
  return data.Items;
}

// Create an asset
async function createAsset({ name, type, status, notes }) {
  const params = {
    TableName: TABLE_NAME,
    Item: {
      id: Date.now().toString(), // Simple ID generation
      name,
      type,
      status,
      notes: notes || ''
    }
  };
  await dynamoDB.put(params).promise();
  return params.Item;
}

// Delete an asset
async function deleteAsset(id) {
  const params = {
    TableName: TABLE_NAME,
    Key: { id }
  };
  await dynamoDB.delete(params).promise();
}

module.exports = { getAssets, createAsset, deleteAsset };