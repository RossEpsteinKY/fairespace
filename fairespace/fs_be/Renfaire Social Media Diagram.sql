CREATE TABLE "users" (
  "id" int,
  "username" varchar,
  "password" varchar,
  "country_code" int,
  "merchant_name" varchar,
  "photos" varchar,
  "created_at" varchar,
  "updated_at" varchar,
  "account_id" int,
  "friends" varchar,
  "groups" int
);

CREATE TABLE "account_info" (
  "id" SERIAL PRIMARY KEY,
  "account" varchar,
  "first_name" varchar,
  "last_name" varchar,
  "created_at" timestamp,
  "country_code" int,
  "state" varchar,
  "postal_code" int
);

CREATE TABLE "friends_table" (
  "id" SERIAL PRIMARY KEY,
  "account" varchar,
  "main_id" int,
  "first_name" varchar,
  "last_name" varchar,
  "created_at" timestamp,
  "country_code" int,
  "state" varchar,
  "postal_code" int,
  "friends_account" varchar
);

CREATE TABLE "photos" (
  "photo_id" SERIAL PRIMARY KEY,
  "image_url" varchar,
  "profile_photo" boolean,
  "description" varchar,
  "gallery_id" varchar,
  "created_at" timestamp
);

CREATE TABLE "groups" (
  "group_id" SERIAL PRIMARY KEY,
  "image_url" varchar,
  "public_group" boolean,
  "is_member" boolean,
  "gallery_id" varchar,
  "created_at" timestamp,
  "country_code" int,
  "state" varchar,
  "postal_code" int,
  "members" varchar
);

CREATE INDEX ON "users" ("id", "account_id");

CREATE INDEX ON "users" ("id", "account_id");

CREATE INDEX ON "users" ("id", "photos");

ALTER TABLE "users" ADD FOREIGN KEY ("photos") REFERENCES "photos" ("photo_id");

ALTER TABLE "users" ADD FOREIGN KEY ("account_id") REFERENCES "account_info" ("id");

ALTER TABLE "users" ADD FOREIGN KEY ("friends") REFERENCES "friends_table" ("account");

ALTER TABLE "users" ADD FOREIGN KEY ("groups") REFERENCES "groups" ("group_id");
