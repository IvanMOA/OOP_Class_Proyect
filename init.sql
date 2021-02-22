CREATE DATABASE pomky;

USE pomky;

CREATE TABLE Tasks (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4();
    [name] VARCHAR NOT NULL;
    [started] TIMESTAMP NOT NULL;
    ended TIMESTAMP NOT NULL;
)