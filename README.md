## Setup

### Ruby Installation

```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
cd ~/.rbenv && src/configure && make -C src

```

Add the following lines to your ~/.bashrc file:
```bash
# enable rbenv
if [ -d "$HOME/.rbenv/" ]; then
    export PATH="$HOME/.rbenv/bin:$PATH"
    eval "$(rbenv init - bash)"
fi
```

```bash
mkdir -p "$(rbenv root)"/plugins
git clone https://github.com/rbenv/ruby-build.git "$(rbenv root)"/plugins/ruby-build
sudo apt install -y libssl-dev
rbenv install 3.1.2
```

### al-folio Installation

```bash
rbenv local 3.1.2
gem install bundle
bundle install

pip install jupyter
```

### Usage

```bash
bundle exec jekyll serve --lsi
```
