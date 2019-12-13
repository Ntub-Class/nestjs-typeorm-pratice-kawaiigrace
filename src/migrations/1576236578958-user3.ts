import {MigrationInterface, QueryRunner} from "typeorm";

export class user31576236578958 implements MigrationInterface {
    name = 'user31576236578958'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `name`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `phone` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `address` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `address`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `phone`", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `name` varchar(255) NOT NULL", undefined);
    }

}
