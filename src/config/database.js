module.exports = {
  dialect: 'postgres',
  host: 'postgres',
  username: 'default',
  password: 'secret',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
