import { MigrationInterface, QueryRunner } from "typeorm";

export class MockData1679594171314 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        insert into post (title, text, "creatorId", "createdAt") values ('Up in Arms', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 15, '2023-10-04T19:01:41Z');
insert into post (title, text, "creatorId", "createdAt") values ('Seeker: The Dark Is Rising, The', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 15, '2024-02-24T06:27:18Z');
insert into post (title, text, "creatorId", "createdAt") values ('Score, The', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 15, '2023-04-25T22:00:14Z');
insert into post (title, text, "creatorId", "createdAt") values ('Rock-A-Doodle', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 15, '2023-09-02T10:14:28Z');
insert into post (title, text, "creatorId", "createdAt") values ('Willow', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 15, '2024-01-01T18:33:34Z');
insert into post (title, text, "creatorId", "createdAt") values ('Body Fat Index of Love', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 15, '2023-09-01T21:47:42Z');
insert into post (title, text, "creatorId", "createdAt") values ('Trap, The (Klopka)', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 15, '2023-10-05T03:46:40Z');
insert into post (title, text, "creatorId", "createdAt") values ('Cheshire Murders, The', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 15, '2023-12-23T15:56:12Z');
insert into post (title, text, "creatorId", "createdAt") values ('Haunted House, A', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 15, '2023-03-06T04:53:27Z');
insert into post (title, text, "creatorId", "createdAt") values ('Not with My Wife, You Don''t!', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 15, '2023-11-08T21:26:40Z');
insert into post (title, text, "creatorId", "createdAt") values ('The Gruffalo''s Child', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 15, '2023-03-29T20:44:56Z');
insert into post (title, text, "creatorId", "createdAt") values ('Antichrist', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 15, '2024-02-20T18:38:40Z');
insert into post (title, text, "creatorId", "createdAt") values ('Teorema', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 15, '2024-01-02T12:59:05Z');
insert into post (title, text, "creatorId", "createdAt") values ('Viper in the Fist', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 15, '2023-12-23T08:06:16Z');
insert into post (title, text, "creatorId", "createdAt") values ('28 Up', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 15, '2023-04-12T07:39:42Z');
insert into post (title, text, "creatorId", "createdAt") values ('Most Beautiful, The (Ichiban utsukushiku)', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 15, '2023-09-24T03:34:37Z');
insert into post (title, text, "creatorId", "createdAt") values ('Life On A String (Bian chang Bian Zou)', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 15, '2023-04-11T00:31:54Z');
insert into post (title, text, "creatorId", "createdAt") values ('Conceiving Ada', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 15, '2023-12-16T00:50:09Z');
insert into post (title, text, "creatorId", "createdAt") values ('My Wife Is a Gangster 2 (Jopog manura 2: Dolaon jeonseol)', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 15, '2023-09-30T11:07:33Z');
insert into post (title, text, "creatorId", "createdAt") values ('Strayed (égarés, Les)', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 15, '2023-07-26T15:37:10Z');
insert into post (title, text, "creatorId", "createdAt") values ('Lucky Ones, The', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 15, '2023-08-24T15:48:01Z');
insert into post (title, text, "creatorId", "createdAt") values ('Feeling Minnesota', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 15, '2023-10-24T04:05:51Z');
insert into post (title, text, "creatorId", "createdAt") values ('Son of the Mask', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 15, '2023-07-04T21:56:01Z');
insert into post (title, text, "creatorId", "createdAt") values ('Stand Up and Fight', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 15, '2023-12-17T00:49:19Z');
insert into post (title, text, "creatorId", "createdAt") values ('Oklahoma Crude', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 15, '2023-11-19T17:49:29Z');
insert into post (title, text, "creatorId", "createdAt") values ('First Men in the Moon', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 15, '2023-03-07T11:35:36Z');
insert into post (title, text, "creatorId", "createdAt") values ('Young Winston', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 15, '2024-02-22T10:19:14Z');
insert into post (title, text, "creatorId", "createdAt") values ('Mother Dao, the Turtlelike (Moeder Dao, de schildpadgelijkende)', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 15, '2023-06-27T09:55:33Z');
insert into post (title, text, "creatorId", "createdAt") values ('Suomisen Olli yllättää', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 15, '2023-07-21T03:10:26Z');
insert into post (title, text, "creatorId", "createdAt") values ('Broadway Melody of 1936', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 15, '2023-05-10T07:55:59Z');
insert into post (title, text, "creatorId", "createdAt") values ('Santa''s Pocket Watch', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 15, '2023-06-15T00:33:20Z');
insert into post (title, text, "creatorId", "createdAt") values ('Trial', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 15, '2023-10-03T14:31:03Z');
insert into post (title, text, "creatorId", "createdAt") values ('Sharktopus', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 15, '2023-09-10T18:57:48Z');
insert into post (title, text, "creatorId", "createdAt") values ('Androcles and the Lion', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 15, '2023-03-12T03:52:26Z');
insert into post (title, text, "creatorId", "createdAt") values ('Park Avenue: Money, Power and the American Dream', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 15, '2023-08-15T09:09:41Z');
insert into post (title, text, "creatorId", "createdAt") values ('We the Party', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 15, '2024-01-20T19:11:16Z');
insert into post (title, text, "creatorId", "createdAt") values ('Cannonball', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 15, '2023-03-23T20:26:16Z');
insert into post (title, text, "creatorId", "createdAt") values ('Don''t Go In the Woods', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 15, '2023-09-16T15:32:03Z');
insert into post (title, text, "creatorId", "createdAt") values ('The Man Who Loved Yngve', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 15, '2023-12-02T00:20:48Z');
insert into post (title, text, "creatorId", "createdAt") values ('Big Kahuna, The', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 15, '2023-12-31T07:47:07Z');
insert into post (title, text, "creatorId", "createdAt") values ('Hocus Pocus', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 15, '2023-06-29T16:33:30Z');
insert into post (title, text, "creatorId", "createdAt") values ('Apocalypto', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 15, '2024-03-01T12:19:07Z');
insert into post (title, text, "creatorId", "createdAt") values ('Are We Done Yet?', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 15, '2023-07-16T09:54:10Z');
insert into post (title, text, "creatorId", "createdAt") values ('Commune, La (Paris, 1871)', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 15, '2023-10-22T01:37:34Z');
insert into post (title, text, "creatorId", "createdAt") values ('All That... for This?!', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 15, '2023-05-09T19:43:09Z');
insert into post (title, text, "creatorId", "createdAt") values ('Bar at the Victoria Station, A (Bar na Victorii)', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 15, '2023-04-25T05:18:07Z');
insert into post (title, text, "creatorId", "createdAt") values ('Round-Up, The (Szegénylegények)', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 15, '2023-09-27T23:53:33Z');
insert into post (title, text, "creatorId", "createdAt") values ('Kevin Nealon: Whelmed, But Not Overly', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 15, '2023-09-26T06:31:01Z');
insert into post (title, text, "creatorId", "createdAt") values ('Classe Tous Risques (Big Risk, The)', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 15, '2024-02-28T16:39:35Z');
insert into post (title, text, "creatorId", "createdAt") values ('Snow on the Pines, The', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 15, '2023-04-29T07:13:00Z');
insert into post (title, text, "creatorId", "createdAt") values ('Blood Shot', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 15, '2023-05-06T03:43:23Z');
insert into post (title, text, "creatorId", "createdAt") values ('Joseph and the Amazing Technicolor Dreamcoat', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 15, '2023-06-23T13:01:12Z');
insert into post (title, text, "creatorId", "createdAt") values ('Disgrace', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 15, '2023-10-29T23:46:01Z');
insert into post (title, text, "creatorId", "createdAt") values ('Newlyweds', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 15, '2024-01-28T09:48:49Z');
insert into post (title, text, "creatorId", "createdAt") values ('Adventures of Prince Achmed, The (Abenteuer des Prinzen Achmed, Die)', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 15, '2023-08-03T12:38:23Z');
insert into post (title, text, "creatorId", "createdAt") values ('Up at the Villa', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 15, '2023-10-18T00:33:57Z');
insert into post (title, text, "creatorId", "createdAt") values ('Before I Self Destruct', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 15, '2023-06-04T15:57:14Z');
insert into post (title, text, "creatorId", "createdAt") values ('Think Fast, Mr. Moto', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 15, '2023-04-10T21:11:12Z');
insert into post (title, text, "creatorId", "createdAt") values ('Death Racers', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 15, '2024-02-19T10:27:52Z');
insert into post (title, text, "creatorId", "createdAt") values ('American Friends', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 15, '2023-11-04T07:46:13Z');
insert into post (title, text, "creatorId", "createdAt") values ('Cube 2: Hypercube', 'Fusce consequat. Nulla nisl. Nunc nisl.', 15, '2024-01-01T23:06:03Z');
insert into post (title, text, "creatorId", "createdAt") values ('Frequently Asked Questions About Time Travel', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 15, '2023-06-24T06:30:10Z');
insert into post (title, text, "creatorId", "createdAt") values ('Labyrinth of Lies', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 15, '2023-10-12T23:30:41Z');
insert into post (title, text, "creatorId", "createdAt") values ('Bat People, The', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 15, '2023-12-30T16:54:55Z');
insert into post (title, text, "creatorId", "createdAt") values ('Antonia''s Line (Antonia)', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 15, '2023-12-09T02:51:13Z');
insert into post (title, text, "creatorId", "createdAt") values ('Outpost', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 15, '2024-01-08T21:51:22Z');
insert into post (title, text, "creatorId", "createdAt") values ('Celluloid Closet, The', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 15, '2023-04-20T21:42:13Z');
insert into post (title, text, "creatorId", "createdAt") values ('Killer Meteors, The (Feng yu shuang liu xing)', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 15, '2023-03-12T12:56:54Z');
insert into post (title, text, "creatorId", "createdAt") values ('Waiting Room (Bekleme odasi)', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 15, '2023-06-09T21:09:00Z');
insert into post (title, text, "creatorId", "createdAt") values ('One 2 Ka 4', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 15, '2023-04-19T04:52:08Z');
insert into post (title, text, "creatorId", "createdAt") values ('Firm, The', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 15, '2023-06-28T01:59:32Z');
insert into post (title, text, "creatorId", "createdAt") values ('Tales That Witness Madness', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 15, '2023-11-13T18:39:39Z');
insert into post (title, text, "creatorId", "createdAt") values ('Thousand Clowns, A', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 15, '2023-05-29T13:39:54Z');
insert into post (title, text, "creatorId", "createdAt") values ('Women Art Revolution', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 15, '2023-12-28T04:04:54Z');
insert into post (title, text, "creatorId", "createdAt") values ('The Fearless Four', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 15, '2023-10-11T09:54:34Z');
insert into post (title, text, "creatorId", "createdAt") values ('Moon Zero Two', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 15, '2023-04-01T10:49:22Z');
insert into post (title, text, "creatorId", "createdAt") values ('Flim-Flam Man, The', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 15, '2023-10-27T10:16:57Z');
insert into post (title, text, "creatorId", "createdAt") values ('Barabbas', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 15, '2023-06-20T20:27:21Z');
insert into post (title, text, "creatorId", "createdAt") values ('Novocaine', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 15, '2023-11-06T15:23:57Z');
insert into post (title, text, "creatorId", "createdAt") values ('Made in Jamaica', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 15, '2023-12-08T10:51:27Z');
insert into post (title, text, "creatorId", "createdAt") values ('Slaughterhouse', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 15, '2023-03-13T21:39:13Z');
insert into post (title, text, "creatorId", "createdAt") values ('Aurora', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 15, '2024-02-28T08:35:23Z');
insert into post (title, text, "creatorId", "createdAt") values ('First Texan, The', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 15, '2023-04-03T16:55:07Z');
insert into post (title, text, "creatorId", "createdAt") values ('Three Little Words', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 15, '2023-09-06T16:54:47Z');
insert into post (title, text, "creatorId", "createdAt") values ('China Syndrome, The', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 15, '2023-10-20T13:47:12Z');
insert into post (title, text, "creatorId", "createdAt") values ('Ghosts... of the Civil Dead', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 15, '2023-11-26T05:47:16Z');
insert into post (title, text, "creatorId", "createdAt") values ('Care Bears Movie, The', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 15, '2023-04-24T09:46:16Z');
insert into post (title, text, "creatorId", "createdAt") values ('One from the Heart', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 15, '2023-10-12T04:22:31Z');
insert into post (title, text, "creatorId", "createdAt") values ('Jesse Stone: Thin Ice', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 15, '2023-12-31T20:54:22Z');
insert into post (title, text, "creatorId", "createdAt") values ('Dinner, The (Cena, La)', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 15, '2023-08-19T11:13:55Z');
insert into post (title, text, "creatorId", "createdAt") values ('Black Death', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 15, '2023-11-30T14:59:20Z');
insert into post (title, text, "creatorId", "createdAt") values ('From Prada to Nada', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 15, '2023-03-27T02:58:27Z');
insert into post (title, text, "creatorId", "createdAt") values ('San Pietro', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 15, '2023-06-08T22:13:22Z');
insert into post (title, text, "creatorId", "createdAt") values ('Perfect Crime, The (Crimen Ferpecto) (Ferpect Crime)', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 15, '2023-05-04T09:56:04Z');
insert into post (title, text, "creatorId", "createdAt") values ('Manta, Manta', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 15, '2023-10-04T00:17:13Z');
insert into post (title, text, "creatorId", "createdAt") values ('Shrek the Third', 'Fusce consequat. Nulla nisl. Nunc nisl.', 15, '2023-11-19T07:58:09Z');
insert into post (title, text, "creatorId", "createdAt") values ('Contract, The', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 15, '2024-02-29T00:47:10Z');
insert into post (title, text, "creatorId", "createdAt") values ('Red River', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 15, '2023-06-23T02:55:26Z');
insert into post (title, text, "creatorId", "createdAt") values ('Regular Guys (Echte Kerle)', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 15, '2023-11-22T10:30:27Z');
insert into post (title, text, "creatorId", "createdAt") values ('I Love Trouble', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 15, '2023-10-15T00:04:59Z');

`);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
