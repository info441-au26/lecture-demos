# SimpleApi.DefaultApi

All URIs are relative to *http://localhost:3000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**echo**](DefaultApi.md#echo) | **POST** /echo | 
[**hello**](DefaultApi.md#hello) | **GET** /hello | 



## echo

> Object echo(opts)



Echo endpoint, returning back the text that was received, both as JSON

### Example

```javascript
import SimpleApi from 'simple_api';

let apiInstance = new SimpleApi.DefaultApi();
let opts = {
  'body': null // Object | 
};
apiInstance.echo(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## hello

> hello()



liveness check, just returning a string

### Example

```javascript
import SimpleApi from 'simple_api';

let apiInstance = new SimpleApi.DefaultApi();
apiInstance.hello((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain

