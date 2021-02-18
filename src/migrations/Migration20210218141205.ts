import { Migration } from '@mikro-orm/migrations';

export class Migration20210218141205 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "post" drop constraint if exists "post_title_check";');
    this.addSql('alter table "post" alter column "title" type text using ("title"::text);');
  }

}
