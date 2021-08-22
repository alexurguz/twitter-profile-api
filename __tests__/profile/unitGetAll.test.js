const db = {
	send: async () => {
		const Items = [];
		return { Items }
	 }
}
const command = require('../../src/commands/profile/getAll')(db);
test('correct get all profiles', async () => {
 	const result = await command.getAllProfiles();
  	expect(Array.isArray(result)).toBe(true);
});