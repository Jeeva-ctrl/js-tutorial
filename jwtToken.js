/*

JWT stands for JSON Web Token. It is a security validation mechanism widely used now a day. 

JWT is basically a string of random alphanumeric characters.

There are three parts of a JWT separated by dots, header, payload, and signature. 

What do I need to validate?

You see why it’s called JSON web token. It is composed of JSON objects, which are base64url-encoded and joined together as a string separated by dots. 

Anyone in possession of JWT can decode it and see the content. 

JWT tokens are digitally signed (the signature part) using the payload content and a secret key. 

In order to change the content, the secret key is required to generate the signature again, otherwise, the signature will be invalid.

When a token is posted to the server, it must be validated to check if anyone has tempered the token or not. 

Lack of proper validation can cause serious security issues and here we will see how to properly validate a JWT.

Header

The contents of the Header describe the cryptographic operations to the JWT data.

This means that the header contains the information about the type of the token and the algorithm used to generate the signature

Payload

The payload is the central part of the JWT which contains verifiable security statements, such as the identity of the user and the permissions they are allowed. 

The payload information is also referred to as Claims.

Signature
The third part of JWT is the signature. 

This is the most important part of JWT validation.

As we have already seen that signature is generated using payload and a secret key, anyone who is in possession of this key can generate new tokens with valid signatures.

Most commonly used crypto algorithms used for generating signature are
· HS256 algorithm, which is short for HMAC-SHA256
· RS256 signing algorithm, which is short for RSA-SHA256

HS256 (Symmetric Key encryption) involves a secret key that is shared between two parties. This secret key is used to encrypt the data and on the receiving end, the same key is used to decrypt the data. HS256 signatures are generated using a secret key which is validated at the receiving end (resource server). On the receiving end, using the payload and secret key signature are generated again and compared to the incoming signature part of the JWT. As only the authentication server and the resources server are in possession of the secret key, it is not possible to temper the JWT token, and that’s how we can check the validity of the JWT token.

RS256 (Asymmetric Key encryption or Public Key encryption) involves two keys,
 a public key, and a private key. 
 
 The private key is used to generate the signature whereas the public key is used to validate the signature. In this case the private key is only in possession of the authentication server who has generated the JWT token and we no longer need to distribute the private key. On the resource server we can validate the token by using the public key. Both keys are non-interchangeable, one can only be used to generate and other can only be used for validation.
JSON Web Key Set (JWKS)
One question arises that how we can get the public key. The JSON Web Key Set (JWKS) is a set of keys that contains the public keys used to verify any JSON Web Token (JWT) issued by the authorization. 

Most authorization servers expose a discovery endpoint, like https://YOUR_DOMAIN/.well-known/openid-configuration.

You can use this endpoint to configure your application or API to automatically locate the JSON Web key set endpoint (jwks_uri), which contains the public key used to sign the JWT 

*/
