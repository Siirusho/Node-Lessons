import {MigrationInterface, QueryRunner} from "typeorm";

export class userRefactoring1630247244527 implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "first-name" TO "name"`);
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "name" TO "first_name"`); // reverts things made in "up" method
    }

}
