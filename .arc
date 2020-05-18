@app
begin-app

@static
folder dist

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
