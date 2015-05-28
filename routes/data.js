module.exports = {
  fake_channels : [
    {id: 0, name: 'One'},
    {id: 1, name: 'Two'},
    {id: 2, name: 'Three'},
    {id: 3, name: 'Four'}
  ],
  fake_users : [
    {id: 0, name: 'John Doe'},
    {id: 1, name: 'John Undoe'},
    {id: 2, name: 'Hans Müller'}
  ],
  fake_messages : [
    {id: 0, content: '0_0_A', sender_id: 0, channel_id: 0},
    {id: 1, content: '1_0_B', sender_id: 1, channel_id: 0},
    {id: 2, content: '2_0_C', sender_id: 2, channel_id: 0},

    {id: 3, content: '0_1_A', sender_id: 0, channel_id: 1},
    {id: 4, content: '1_1_B', sender_id: 1, channel_id: 1},
    {id: 5, content: '2_1_C', sender_id: 2, channel_id: 1},

    {id: 6, content: '0_2_A', sender_id: 0, channel_id: 2},
    {id: 7, content: '1_2_B', sender_id: 1, channel_id: 2},
    {id: 8, content: '2_2_C', sender_id: 2, channel_id: 2}
  ]
};
