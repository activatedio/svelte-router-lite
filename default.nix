with import <nixpkgs> {};

stdenv.mkDerivation {

  name = "svelte-router-lite";

  buildInputs = with pkgs; [
    gnumake
    nodejs-18_x
  ];

}
