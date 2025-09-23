# MongoDB Credentials — From Scratch

This quick guide walks you through getting MongoDB credentials for this project, both with MongoDB Atlas (cloud) and locally.

## What you need for this app

- MONGODB_URI — connection string (Atlas or local)
- MONGODB_DB_NAME — logical database name (e.g., `MyPortfolioDB`)

Add them to `.env.local` (or `.env`) in the project root. See `.env.example` for a template.

---

## Option A — Use MongoDB Atlas (Free Tier, recommended)

1. Create account, project, and cluster

- Go to https://www.mongodb.com/atlas
- Create an account, create a Project, then create a Free (M0) cluster

2. Create a database user

- Atlas → Database Access → Add New Database User
- Auth: Password
- Set a strong username/password (save for the URI)
- Role: Start with "Read and write to any database" (you can restrict later)

3. Allow your IP

- Atlas → Network Access → Add IP Address
- For local testing, 0.0.0.0/0 (any IP). For production, restrict to specific IPs

4. Get the connection URI

- Atlas → Database → Connect → Drivers → Node.js → Copy the URI, e.g.:

```
mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/?retryWrites=true&w=majority
```

5. Fill your env and test

- In `.env.local`:

```
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/?retryWrites=true&w=majority
MONGODB_DB_NAME=MyPortfolioDB
```

- From the project root, verify:

```
node test-mongodb.js
```

If successful, you’ll see a confirmation and a default portfolio document will be created if missing.

---

## Option B — Use Local MongoDB

1. Install MongoDB Community Server or use Docker

- Native installer: https://www.mongodb.com/try/download/community
- Or Docker:

```
docker run --name mongo -p 27017:27017 -d mongo:7
```

2. Connection URI and DB name

- In `.env.local`:

```
MONGODB_URI=mongodb://localhost:27017
MONGODB_DB_NAME=MyPortfolioDB
```

3. (Optional) Create database/collection

- The app will create documents on first run.
- You can also use MongoDB Compass or `mongosh` to create `MyPortfolioDB` and a `portfolio` collection.

---

## Security Tips

- Never commit secrets; use `.env.local` (gitignored).
- Use least-privileged DB users for production.
- Restrict IP access in Atlas; avoid 0.0.0.0/0 in production.
- Rotate credentials regularly.

---

## Troubleshooting

- ECONNREFUSED: Check the server/cluster is running and your IP is allowed.
- Authentication failed: Verify the username/password in the URI.
- Timeout: Ensure firewall rules/Atlas IP allowlist permit your connection.
- DNS issues on Atlas: Some corporate networks block SRV lookups; try another network or use `mongodb://` with a direct host.
