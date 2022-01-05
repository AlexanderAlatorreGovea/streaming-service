const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class initialSchema1641356505744 {
    name = 'initialSchema1641356505744'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL, "confirmPassword" varchar NOT NULL, "email" varchar NOT NULL)`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
